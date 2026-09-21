"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { quizAnswersSchema, leadRecordSchema, type LeadRecord } from "@/lib/lead-schema";
import { deliverLead, newLeadId, type DeliveryResult } from "@/lib/lead-delivery";
import { consentDisclosureText } from "@/lib/consent-copy";

const submitLeadInput = quizAnswersSchema.extend({
  landingPageUrl: z.string(),
  referrer: z.string().nullable(),
  // Reserved for TrustedForm/Jornaya once those snippets are added to the quiz page —
  // see the TODO in lead-delivery.ts. Optional so the form keeps working without them.
  trustedFormCertUrl: z.string().nullable().optional(),
  jornayaLeadId: z.string().nullable().optional(),
});

export type SubmitLeadInput = z.infer<typeof submitLeadInput>;

export type SubmitLeadState =
  | { status: "idle" }
  | { status: "error"; message: string }
  | { status: "success"; leadId: string };

function clientIp(h: Headers): string | null {
  // Vercel and most reverse proxies set x-forwarded-for as "client, proxy1, proxy2, ...".
  const forwarded = h.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return h.get("x-real-ip");
}

export async function submitLead(input: SubmitLeadInput): Promise<SubmitLeadState> {
  const parsed = submitLeadInput.safeParse(input);
  if (!parsed.success) {
    return { status: "error", message: "Something on the form didn't look right. Please check your answers and try again." };
  }

  const h = await headers();
  const record: LeadRecord = leadRecordSchema.parse({
    ...parsed.data,
    id: newLeadId(),
    submittedAt: new Date().toISOString(),
    consentText: consentDisclosureText(),
    ipAddress: clientIp(h),
    userAgent: h.get("user-agent"),
    trustedFormCertUrl: parsed.data.trustedFormCertUrl ?? null,
    jornayaLeadId: parsed.data.jornayaLeadId ?? null,
  });

  const result: DeliveryResult = await deliverLead(record);
  if (!result.ok) {
    return { status: "error", message: result.error };
  }
  return { status: "success", leadId: result.leadId };
}
