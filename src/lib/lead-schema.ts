import { z } from "zod";

export const COVERAGE_TIERS = [
  { value: "10000_or_less", label: "$10,000 or less" },
  { value: "10001_20000", label: "$10,001 – $20,000" },
  { value: "20001_30000", label: "$20,001 – $30,000" },
  { value: "30001_40000", label: "$30,001 – $40,000" },
  { value: "40001_plus", label: "$40,001 or more" },
] as const;

const coverageValues = COVERAGE_TIERS.map((t) => t.value) as [string, ...string[]];

const currentYear = new Date().getFullYear();

// Sanity bounds only (a real person, not a bot filling random digits). Which ages a given
// carrier/campaign will actually underwrite is a buyer-side eligibility rule that belongs in
// the LeadProsper/Ringba campaign config once those exist, not hardcoded here.
export const quizAnswersSchema = z.object({
  gender: z.enum(["male", "female"]),
  birthMonth: z.number().int().min(1).max(12),
  birthDay: z.number().int().min(1).max(31),
  birthYear: z
    .number()
    .int()
    .min(currentYear - 120)
    .max(currentYear - 15),
  coverageAmount: z.enum(coverageValues),
  zip: z.string().regex(/^\d{5}$/, "Enter a 5-digit ZIP code"),
  state: z.string().length(2),
  email: z.email(),
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  phone: z
    .string()
    .transform((v) => v.replace(/\D/g, ""))
    .pipe(z.string().length(10, "Enter a 10-digit phone number")),
  consent: z.literal(true, { message: "Consent is required to get your quote" }),
});

export type QuizAnswers = z.infer<typeof quizAnswersSchema>;

// What actually gets persisted/delivered: the validated answers plus the request-time context
// that a TCPA defense file and a LeadProsper post both expect. IP/user agent/timestamp are
// filled in server-side from the request, never trusted from the client.
export const leadRecordSchema = quizAnswersSchema.extend({
  id: z.string(),
  submittedAt: z.iso.datetime(),
  consentText: z.string(),
  ipAddress: z.string().nullable(),
  userAgent: z.string().nullable(),
  landingPageUrl: z.string(),
  referrer: z.string().nullable(),
  // Populated once TrustedForm/Jornaya snippets are added to the quiz (see lead-delivery.ts).
  trustedFormCertUrl: z.string().nullable().default(null),
  jornayaLeadId: z.string().nullable().default(null),
});

export type LeadRecord = z.infer<typeof leadRecordSchema>;

export function isValidDate(month: number, day: number, year: number): boolean {
  const d = new Date(year, month - 1, day);
  return d.getFullYear() === year && d.getMonth() === month - 1 && d.getDate() === day;
}
