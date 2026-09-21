export type MedicationFact = {
  slug: string;
  name: string;
  examples: string;
  summary: string;
  detail: string;
};

export const MEDICATIONS: MedicationFact[] = [
  {
    slug: "anti-seizure-medication",
    name: "Anti-Seizure Medication",
    examples: "e.g., Keppra, Dilantin, Lamictal",
    summary: "Usually read as a marker for epilepsy or a seizure history rather than a concern on its own.",
    detail:
      "Carriers care less about the medication itself and more about what it tells them: how long you've been seizure-free, and whether the seizures are controlled. A long stretch without a seizure while on a stable dose commonly clears for level coverage. A recent seizure, or a recent change in medication, is more likely to prompt extra questions or a graded outcome.",
  },
  {
    slug: "antidepressants",
    name: "Antidepressants",
    examples: "e.g., Zoloft, Lexapro, Wellbutrin",
    summary: "One of the most common prescriptions carriers see, and rarely a barrier by itself.",
    detail:
      "Depression and anxiety are extremely common, and most carriers treat a stable antidepressant prescription as routine rather than a red flag. What tends to matter more is stability — how long you've been on the medication, whether there have been recent dosage changes, and whether there's a history of hospitalization. A well-managed, long-standing prescription is usually a non-issue.",
  },
  {
    slug: "blood-thinners",
    name: "Blood Thinners",
    examples: "e.g., Eliquis, Xarelto, Warfarin",
    summary: "The reason you're prescribed one matters more than the medication itself.",
    detail:
      "Blood thinners are prescribed for a wide range of reasons — AFib, a past blood clot, a mechanical heart valve — and carriers look past the prescription to the underlying condition. A blood thinner tied to a well-managed condition like AFib is often fine at level rates; one tied to a more serious recent cardiac event may point toward a graded outcome instead.",
  },
  {
    slug: "opioid-pain-medication",
    name: "Opioid Pain Medication",
    examples: "e.g., Oxycodone, Hydrocodone, Tramadol",
    summary: "The most scrutinized medication category, since carriers are specifically checking for signs of dependency.",
    detail:
      "Occasional or short-term use tied to a specific event — a past surgery, for example — is treated very differently from an ongoing, long-term prescription. Carriers are mainly trying to rule out substance dependency and the more serious chronic pain conditions opioids are sometimes prescribed for. A long-standing, stable prescription for a known condition fares better than a recent or open-ended one.",
  },
];

export function findMedication(slug: string): MedicationFact | undefined {
  return MEDICATIONS.find((m) => m.slug === slug);
}
