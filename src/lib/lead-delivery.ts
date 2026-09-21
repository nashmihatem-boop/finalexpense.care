import { randomUUID } from "node:crypto";
import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { Resend } from "resend";
import type { LeadRecord } from "@/lib/lead-schema";
import { COVERAGE_TIERS } from "@/lib/lead-schema";
import { siteConfig } from "@/lib/site-config";

export type DeliveryResult =
  | { ok: true; leadId: string; deliveredToBuyers: boolean }
  | { ok: false; error: string };

/**
 * Everything that happens to a lead after the quiz form validates it. Kept in this order
 * on purpose:
 *
 *  1. Durably store it ourselves first. This is the only step that must never silently no-op —
 *     if it fails, the visitor sees an error instead of a false "thanks!" for a lead that went
 *     nowhere.
 *  2. Notify a human by email. Best-effort — a missing RESEND_API_KEY skips it (logged, not
 *     thrown) rather than failing the submission.
 *  3. Hand it to whichever buyer channel(s) are configured. Each channel is independent and
 *     best-effort: a channel that isn't configured yet is skipped (logged, not thrown), so the
 *     site is fully usable before LeadProsper/Ringba campaigns exist. Once a campaign is live,
 *     set its env vars and postToLeadProsper below starts actually delivering — no other code
 *     here needs to change.
 */
export async function deliverLead(record: LeadRecord): Promise<DeliveryResult> {
  try {
    await storeLocally(record);
  } catch (err) {
    console.error("[lead-delivery] local store failed — lead was NOT captured", err);
    return { ok: false, error: "We couldn't save your information. Please call us instead." };
  }

  const emailResult = await sendLeadNotificationEmail(record);
  if (!emailResult.attempted) {
    console.warn(
      `[lead-delivery] RESEND_API_KEY not set — lead ${record.id} was NOT emailed to ` +
        `${siteConfig.leadNotificationEmail}. Set RESEND_API_KEY (from resend.com) to enable it.`
    );
  } else if (!emailResult.ok) {
    console.error(`[lead-delivery] Lead notification email failed for lead ${record.id}`, emailResult.error);
  }

  const buyerResult = await postToLeadProsper(record);
  if (!buyerResult.attempted) {
    console.warn(
      `[lead-delivery] LeadProsper not configured — lead ${record.id} stored locally only. ` +
        "Set LEADPROSPER_CAMPAIGN_POST_URL and LEADPROSPER_SUPPLIER_KEY once the Final Expense " +
        "supplier campaign exists in LeadProsper."
    );
  } else if (!buyerResult.ok) {
    // Storage already succeeded, so the lead isn't lost — but nobody's buying it yet. Surface
    // this loudly; a silent buyer-side failure is the expensive kind to discover late.
    console.error(`[lead-delivery] LeadProsper post failed for lead ${record.id}`, buyerResult.error);
  }

  return { ok: true, leadId: record.id, deliveredToBuyers: buyerResult.attempted && buyerResult.ok };
}

export function newLeadId(): string {
  return randomUUID();
}

// --- Local durability store --------------------------------------------------------------
// A JSON-lines file under data/, gitignored. This is a development convenience so the funnel
// is testable end to end before any real datastore is wired up — Vercel's serverless
// filesystem is ephemeral, so this does NOT survive in production. Before going live, swap
// this function's body for a real store (Postgres/Supabase, etc.); nothing else in this file
// needs to change since callers only see storeLocally()/deliverLead().
async function storeLocally(record: LeadRecord): Promise<void> {
  const dir = path.join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  await appendFile(path.join(dir, "leads.jsonl"), JSON.stringify(record) + "\n", "utf-8");
}

// --- Email notification (leads → a human inbox) --------------------------------------------
type EmailResult = { attempted: false } | { attempted: true; ok: true } | { attempted: true; ok: false; error: string };

const resendClient = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function age(record: LeadRecord): number {
  const today = new Date();
  let years = today.getFullYear() - record.birthYear;
  const hasHadBirthdayThisYear =
    today.getMonth() + 1 > record.birthMonth ||
    (today.getMonth() + 1 === record.birthMonth && today.getDate() >= record.birthDay);
  if (!hasHadBirthdayThisYear) years -= 1;
  return years;
}

function coverageLabel(value: LeadRecord["coverageAmount"]): string {
  return COVERAGE_TIERS.find((t) => t.value === value)?.label ?? value;
}

function formatPhone(phone: string): string {
  return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
}

/**
 * Emails a plain notification to siteConfig.leadNotificationEmail every time a lead comes in.
 * This is a human-facing heads-up, not the system of record — the full lead (including IP,
 * user agent, and consent text for a TCPA defense file) is already durable via storeLocally().
 *
 * Requires RESEND_API_KEY (from resend.com). Sends from leads@finalexpense.care, which is a
 * Resend-verified sending domain as of 2026-09-22 — before that, Resend only allowed sending to
 * the account's own address. Not configured yet: skipped, logged, submission still succeeds.
 */
async function sendLeadNotificationEmail(record: LeadRecord): Promise<EmailResult> {
  if (!resendClient) return { attempted: false };

  const fullName = `${record.firstName} ${record.lastName}`;
  const subject = `New quote request — ${fullName} (${record.state})`;
  const rows: [string, string][] = [
    ["Name", fullName],
    ["Phone", formatPhone(record.phone)],
    ["Email", record.email],
    ["ZIP / State", `${record.zip} / ${record.state}`],
    ["Age", `${age(record)} (DOB ${record.birthMonth}/${record.birthDay}/${record.birthYear})`],
    ["Gender", record.gender === "male" ? "Male" : "Female"],
    ["Coverage requested", coverageLabel(record.coverageAmount)],
    ["Submitted", new Date(record.submittedAt).toLocaleString("en-US", { timeZone: "America/New_York" }) + " ET"],
    ["Landing page", record.landingPageUrl],
    ["Lead ID", record.id],
  ];

  const html = `
    <div style="font-family: -apple-system, sans-serif; max-width: 480px;">
      <h2 style="color: #142b56; margin-bottom: 4px;">New quote request</h2>
      <p style="color: #6b7280; margin-top: 0;">via FinalExpense.care</p>
      <table style="border-collapse: collapse; width: 100%;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 6px 12px 6px 0; color: #6b7280; font-size: 13px; white-space: nowrap; vertical-align: top;">${label}</td>
            <td style="padding: 6px 0; color: #111827; font-size: 14px; font-weight: 600;">${value}</td>
          </tr>`
          )
          .join("")}
      </table>
    </div>`;
  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  try {
    const { error } = await resendClient.emails.send({
      from: "FinalExpense.care Leads <leads@finalexpense.care>",
      to: siteConfig.leadNotificationEmail,
      replyTo: record.email,
      subject,
      html,
      text,
    });
    if (error) return { attempted: true, ok: false, error: error.message };
    return { attempted: true, ok: true };
  } catch (err) {
    return { attempted: true, ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

// --- LeadProsper (leads → buyers) ---------------------------------------------------------
type BuyerPostResult = { attempted: false } | { attempted: true; ok: true } | { attempted: true; ok: false; error: string };

/**
 * Posts a lead to LeadProsper as a supplier once the Final Expense campaign exists there.
 *
 * Not implemented yet because the exact posting URL and field mapping are per-campaign and
 * only exist once someone creates the "Insurance - Final Expense" supplier campaign in
 * LeadProsper's dashboard — at which point LeadProsper hands you a campaign-specific posting
 * spec (the `api_specs_url` LeadProsper shows on the campaign). Guessing that shape here would
 * ship an integration that fails every time, silently, which is worse than not having one.
 *
 * To wire this up:
 *   1. Create the supplier campaign in LeadProsper, get its posting URL + field names.
 *   2. Set LEADPROSPER_CAMPAIGN_POST_URL and LEADPROSPER_SUPPLIER_KEY in the environment.
 *   3. Replace the body below with the real fetch() using those field names.
 */
async function postToLeadProsper(record: LeadRecord): Promise<BuyerPostResult> {
  const postUrl = process.env.LEADPROSPER_CAMPAIGN_POST_URL;
  const supplierKey = process.env.LEADPROSPER_SUPPLIER_KEY;
  if (!postUrl || !supplierKey) return { attempted: false };

  try {
    const res = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ supplier_key: supplierKey, lead: record }),
    });
    if (!res.ok) return { attempted: true, ok: false, error: `HTTP ${res.status}` };
    return { attempted: true, ok: true };
  } catch (err) {
    return { attempted: true, ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
