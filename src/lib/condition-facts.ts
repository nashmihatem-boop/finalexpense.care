// General, original guidance on how simplified-issue underwriting commonly treats common health
// conditions. These reflect broad, typical patterns in the final expense insurance market, not a
// promise, a medical opinion, or any single carrier's rules — every carrier sets its own
// questions and look-back periods, and actual eligibility always depends on full underwriting of
// the applicant's complete history. This is insurance-underwriting context, not medical advice.
//
// Deliberately NOT included: a carrier-by-carrier comparison table (which real companies accept
// what) or specific dollar rates. Those would require verified, current data on named real
// businesses' actual underwriting rules and pricing, which isn't something to guess at on a
// commercial site — a licensed agent gives that answer instead.

export type Tier = "level" | "time-dependent" | "graded-modified" | "guaranteed";

export const TIER_INFO: Record<Tier, { label: string; blurb: string }> = {
  level: {
    label: "Usually level",
    blurb: "Most applicants with this condition, if it's stable and managed, qualify for full day-one coverage with at least one carrier.",
  },
  "time-dependent": {
    label: "Time-dependent",
    blurb: "The outcome mostly depends on how long ago it happened or how severe it was — it can land at level or graded depending on timing.",
  },
  "graded-modified": {
    label: "Graded or modified",
    blurb: "Usually insurable, but typically with a waiting period before the full benefit applies to natural-cause death.",
  },
  guaranteed: {
    label: "Often guaranteed acceptance",
    blurb: "Commonly a knockout for simplified issue at most carriers — the guaranteed-acceptance path, with its two-year waiting period, is the usual route.",
  },
};

// The general categories nearly every simplified-issue application asks about, regardless of
// which specific condition is involved. Genuinely common across the market, not tied to one
// carrier's proprietary question wording.
export const COMMON_QUESTION_CATEGORIES: { question: string; why: string }[] = [
  { question: "When were you first diagnosed?", why: "Timing decides which carrier look-back window you fall inside or outside of." },
  { question: "Is it currently controlled or stable?", why: "Stable and managed reads very differently from recently changed or worsening." },
  { question: "Have you been hospitalized or had a related procedure recently?", why: "Recent hospitalization is one of the strongest signals underwriters weigh." },
  { question: "What medications do you take for it?", why: "The carrier cross-checks this against your prescription history, so it needs to match." },
  { question: "Have you had any related complications?", why: "Complications often matter more than the base diagnosis itself." },
];

export type Scenario = { situation: string; outcome: string };

export type ConditionFact = {
  slug: string;
  name: string;
  tier: Tier;
  note: string;
  scenarios: Scenario[];
  medications?: { name: string; note: string }[];
};

export const CONDITIONS: ConditionFact[] = [
  { slug: "adl-limitations", name: "ADL Limitations", tier: "guaranteed", note: "Needing regular help with daily activities like bathing or dressing is treated as a high-risk signal by most carriers.",
    scenarios: [
      { situation: "Occasional help with one or two tasks, otherwise independent", outcome: "Sometimes still level or graded with the right carrier" },
      { situation: "Regular help needed with multiple daily activities", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "alcohol-use-history", name: "Alcohol-Use History", tier: "time-dependent", note: "Recent treatment usually means a wait; a stable, longer history of sobriety tends to fare better.",
    scenarios: [
      { situation: "5+ years of sobriety, no related health issues", outcome: "Often level" },
      { situation: "Treatment or related hospitalization within the last 1–2 years", outcome: "Usually graded, modified, or guaranteed acceptance" },
    ] },
  { slug: "aortic-aneurysm", name: "Aortic Aneurysm", tier: "time-dependent", note: "More carriers open up once it's been surgically repaired and you're a couple of years out.",
    scenarios: [
      { situation: "Repaired 2+ years ago, stable since", outcome: "Often level with select carriers" },
      { situation: "Recently diagnosed or unrepaired", outcome: "Usually graded or modified" },
    ] },
  { slug: "asthma", name: "Asthma", tier: "level", note: "Well controlled without oxygen use, it rarely affects the outcome at all.",
    scenarios: [
      { situation: "Managed with an inhaler, no oxygen use", outcome: "Almost always level" },
      { situation: "Frequent flare-ups or emergency room visits", outcome: "Can shift to graded with some carriers" },
    ] },
  { slug: "afib", name: "Atrial Fibrillation (AFib)", tier: "level", note: "Commonly accepted at level rates once it's stable and treated.",
    scenarios: [
      { situation: "Controlled with medication, no other heart conditions", outcome: "Usually level" },
      { situation: "Recent onset or combined with other cardiac issues", outcome: "Can move to graded or modified" },
    ] },
  { slug: "bipolar-disorder", name: "Bipolar Disorder", tier: "level", note: "Generally treated like other well-managed mental health conditions — commonly accepted.",
    scenarios: [
      { situation: "Stable on medication, no recent hospitalization", outcome: "Usually level" },
      { situation: "Recent hospitalization or medication changes", outcome: "Can move to graded or modified" },
    ] },
  { slug: "blood-clots-dvt-pe", name: "Blood Clots / DVT / PE", tier: "level", note: "Often fine, though the underlying reason you're on blood thinners matters more than the clot itself.",
    scenarios: [
      { situation: "A single past event, resolved and stable", outcome: "Often level" },
      { situation: "Recurring clots or an unresolved underlying condition", outcome: "Can move to graded or modified" },
    ] },
  { slug: "bypass-surgery", name: "Bypass Surgery", tier: "time-dependent", note: "Level coverage becomes common once you're roughly a year past surgery and stable.",
    scenarios: [
      { situation: "12+ months post-surgery, stable, no further procedures", outcome: "Often level" },
      { situation: "Within the last year, or additional procedures since", outcome: "Usually graded or modified" },
    ] },
  { slug: "cancer-history", name: "Cancer History", tier: "time-dependent", note: "Many carriers open up to full coverage around the two-year remission mark; active treatment or spread leans toward guaranteed acceptance.",
    scenarios: [
      { situation: "2+ years in remission, no recurrence", outcome: "Often level with several carriers" },
      { situation: "Currently in treatment, or diagnosed within the last year", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "chronic-pancreatitis", name: "Chronic Pancreatitis", tier: "graded-modified", note: "Often graded; a related history of alcohol use can narrow the options further.",
    scenarios: [
      { situation: "Managed, infrequent flare-ups", outcome: "Often graded" },
      { situation: "Frequent flare-ups or hospitalization", outcome: "Can move to modified or guaranteed acceptance" },
    ] },
  { slug: "cirrhosis-liver-disease", name: "Cirrhosis / Liver Disease", tier: "level", note: "Milder cases are often fine — liver failure or a transplant recommendation points toward a longer wait.",
    scenarios: [
      { situation: "Early-stage, stable, no complications", outcome: "Sometimes level" },
      { situation: "Advanced disease or transplant recommended", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "congestive-heart-failure", name: "Congestive Heart Failure", tier: "guaranteed", note: "A waiting period is close to unavoidable with this diagnosis.",
    scenarios: [
      { situation: "Mild, well-managed (lower classification)", outcome: "Occasionally graded with select carriers" },
      { situation: "Moderate to advanced", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "copd", name: "COPD", tier: "graded-modified", note: "Some carriers still offer level rates; needing home oxygen is a near-universal knockout.",
    scenarios: [
      { situation: "Mild, managed with inhalers, no oxygen", outcome: "Sometimes level with select carriers" },
      { situation: "Home oxygen use", outcome: "Almost always guaranteed acceptance" },
    ],
    medications: [{ name: "Albuterol, Spiriva, Symbicort", note: "Common maintenance inhalers — generally read as a managed, moderate case." }] },
  { slug: "crohns-colitis-ibd", name: "Crohn's / Colitis (IBD)", tier: "level", note: "Commonly accepted when it's under management.",
    scenarios: [
      { situation: "Managed with medication, in remission", outcome: "Usually level" },
      { situation: "Active flare-ups or recent surgery", outcome: "Can move to graded" },
    ] },
  { slug: "dementia-alzheimers", name: "Dementia or Alzheimer's", tier: "guaranteed", note: "A knockout for simplified issue — this is usually a guide a family member is reading on someone else's behalf.",
    scenarios: [
      { situation: "Early-stage, mild cognitive impairment", outcome: "Occasionally graded with select carriers" },
      { situation: "Moderate to advanced diagnosis", outcome: "Almost always guaranteed acceptance" },
    ] },
  { slug: "depression-anxiety", name: "Depression or Anxiety", tier: "level", note: "Very commonly accepted when it's being treated.",
    scenarios: [
      { situation: "Managed with medication or therapy, stable", outcome: "Usually level" },
      { situation: "Recent hospitalization or a history of self-harm", outcome: "Can move to graded or guaranteed acceptance" },
    ],
    medications: [{ name: "Zoloft, Lexapro, Wellbutrin", note: "Common, stable prescriptions — generally read as routine rather than a red flag." }] },
  { slug: "diabetes", name: "Diabetes", tier: "level", note: "Stable, well-controlled type 2 diabetes is one of the most common conditions to still land at level — complications can shift the tier.",
    scenarios: [
      { situation: "Controlled with diet, pills, or insulin, no complications", outcome: "Often level, sometimes at standard non-diabetic rates" },
      { situation: "Complications like neuropathy or retinopathy, otherwise stable", outcome: "Often still level with the right carrier; sometimes graded" },
      { situation: "Insulin shock, diabetic coma, or amputation within the last 2 years", outcome: "Usually graded, modified, or guaranteed acceptance" },
    ],
    medications: [
      { name: "Metformin, glipizide, Januvia", note: "Common oral medications — generally read as well-managed type 2 diabetes." },
      { name: "Insulin (Lantus, Novolog, and similar)", note: "Signals more advanced or longer-standing diabetes; many carriers still offer level coverage." },
    ] },
  { slug: "diabetic-amputation", name: "Diabetic Amputation", tier: "time-dependent", note: "Level coverage becomes more common again after roughly two years of stability.",
    scenarios: [
      { situation: "2+ years since amputation, stable, no further complications", outcome: "Often level with select carriers" },
      { situation: "Within the last 2 years", outcome: "Usually graded, modified, or guaranteed acceptance" },
    ] },
  { slug: "enlarged-prostate", name: "Enlarged Prostate", tier: "level", note: "Rarely changes the outcome one way or the other.",
    scenarios: [{ situation: "Any typical case, managed or unmanaged", outcome: "Almost always level" }] },
  { slug: "epilepsy-seizures", name: "Epilepsy / Seizures", tier: "level", note: "Commonly accepted, particularly when seizures are controlled by medication.",
    scenarios: [
      { situation: "Seizure-free for 1+ years on stable medication", outcome: "Usually level" },
      { situation: "Recent seizure or a medication change", outcome: "Can move to graded" },
    ],
    medications: [{ name: "Keppra, Dilantin, Lamictal", note: "Carriers weigh how long you've been seizure-free more than the medication itself." }] },
  { slug: "fibromyalgia", name: "Fibromyalgia", tier: "level", note: "Commonly accepted.",
    scenarios: [{ situation: "Any typical case, managed or unmanaged", outcome: "Usually level" }] },
  { slug: "heart-attack", name: "Heart Attack", tier: "time-dependent", note: "Level coverage commonly opens back up around the one-year mark if you've stayed stable since.",
    scenarios: [
      { situation: "12+ months out, stable, no further cardiac events", outcome: "Often level with select carriers" },
      { situation: "Within the last 12 months", outcome: "Usually graded or modified" },
    ] },
  { slug: "heart-valve-disease", name: "Heart Valve Disease", tier: "time-dependent", note: "A recent diagnosis or repair typically means a wait before full coverage.",
    scenarios: [
      { situation: "Repaired and stable, 1+ years out", outcome: "Often level with select carriers" },
      { situation: "Recently diagnosed or repaired", outcome: "Usually graded or modified" },
    ] },
  { slug: "hepatitis-c", name: "Hepatitis C", tier: "level", note: "More carriers open up once it's been successfully treated and cleared.",
    scenarios: [
      { situation: "Treated and cleared (undetectable)", outcome: "Often level" },
      { situation: "Currently active or untreated", outcome: "Can move to graded or modified" },
    ] },
  { slug: "high-blood-pressure", name: "High Blood Pressure", tier: "level", note: "One of the most common conditions carriers see — controlled, it's usually treated as routine.",
    scenarios: [{ situation: "Controlled with medication or lifestyle", outcome: "Almost always level" }],
    medications: [{ name: "Lisinopril, losartan, amlodipine", note: "Extremely common prescriptions, generally treated as routine on their own." }] },
  { slug: "high-cholesterol", name: "High Cholesterol", tier: "level", note: "Rarely even comes up as a concern in underwriting.",
    scenarios: [{ situation: "Any typical case, treated or untreated", outcome: "Almost always level" }],
    medications: [{ name: "Statins (Lipitor, Crestor, and similar)", note: "Extremely common and generally a non-issue for underwriting." }] },
  { slug: "hiv-aids", name: "HIV / AIDS", tier: "graded-modified", note: "A well-managed HIV diagnosis may find partial coverage; an AIDS diagnosis tends to lean toward guaranteed acceptance.",
    scenarios: [
      { situation: "HIV, well-managed, undetectable viral load", outcome: "Sometimes graded with select carriers" },
      { situation: "AIDS diagnosis", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "home-oxygen", name: "Home Oxygen", tier: "guaranteed", note: "A near-automatic knockout — the exception is oxygen used specifically for treated sleep apnea.",
    scenarios: [
      { situation: "Oxygen for treated sleep apnea only", outcome: "Often still level or graded" },
      { situation: "Oxygen for a lung or heart condition", outcome: "Almost always guaranteed acceptance" },
    ] },
  { slug: "kidney-disease", name: "Kidney Disease", tier: "level", note: "Earlier-stage kidney disease is often fine; dialysis or kidney failure points toward a wait.",
    scenarios: [
      { situation: "Early stage, stable, no dialysis", outcome: "Often level" },
      { situation: "On dialysis or in kidney failure", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "lupus", name: "Lupus", tier: "level", note: "Several carriers will offer level coverage; more severe or active cases may be graded.",
    scenarios: [
      { situation: "Mild, well-managed, infrequent flares", outcome: "Often level with select carriers" },
      { situation: "Active or affecting major organs", outcome: "Usually graded or modified" },
    ] },
  { slug: "multiple-sclerosis", name: "Multiple Sclerosis", tier: "level", note: "Available at level with a number of carriers; significant help with daily activities can mean a wait.",
    scenarios: [
      { situation: "Stable, independent, mild symptoms", outcome: "Often level with select carriers" },
      { situation: "Significant mobility limitations or daily-activity help needed", outcome: "Usually graded or guaranteed acceptance" },
    ] },
  { slug: "neuropathy", name: "Neuropathy", tier: "level", note: "Often fine on its own; some carriers grade it when it's a complication of diabetes.",
    scenarios: [
      { situation: "Mild, not tied to a more serious underlying condition", outcome: "Usually level" },
      { situation: "A complication of advancing diabetes or another condition", outcome: "Can move to graded" },
    ] },
  { slug: "obesity-bmi-over-40", name: "Obesity / BMI Over 40", tier: "level", note: "A number of carriers don't factor build into simplified-issue underwriting at all.",
    scenarios: [{ situation: "Any typical case, with or without related conditions", outcome: "Often still level with the right carrier" }] },
  { slug: "organ-transplant", name: "Organ Transplant", tier: "time-dependent", note: "Options open up further out from the transplant — sooner after typically means a longer wait.",
    scenarios: [
      { situation: "5+ years post-transplant, stable", outcome: "Sometimes level with select carriers" },
      { situation: "Within the last few years, or on the waiting list", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "osteoporosis", name: "Osteoporosis", tier: "level", note: "Rarely affects the outcome.",
    scenarios: [{ situation: "Any typical case, treated or untreated", outcome: "Almost always level" }] },
  { slug: "pacemaker-defibrillator", name: "Pacemaker / Defibrillator", tier: "time-dependent", note: "Level coverage is common about a year out — an underlying heart-failure diagnosis changes that.",
    scenarios: [
      { situation: "12+ months out, stable, no heart failure diagnosis", outcome: "Often level" },
      { situation: "Recently placed, or an underlying heart-failure diagnosis", outcome: "Usually graded or guaranteed acceptance" },
    ] },
  { slug: "parkinsons-disease", name: "Parkinson's Disease", tier: "level", note: "Available at level with some carriers; significant mobility limitations can mean a wait.",
    scenarios: [
      { situation: "Early stage, independent, mild symptoms", outcome: "Often level with select carriers" },
      { situation: "Significant mobility limitations or wheelchair use", outcome: "Usually graded or guaranteed acceptance" },
    ] },
  { slug: "peripheral-artery-disease", name: "Peripheral Artery Disease", tier: "level", note: "Often fine; recent vascular surgery can push it toward a wait.",
    scenarios: [
      { situation: "Managed with medication, no recent surgery", outcome: "Often level" },
      { situation: "Recent vascular surgery or amputation", outcome: "Usually graded or modified" },
    ] },
  { slug: "rheumatoid-arthritis", name: "Rheumatoid Arthritis", tier: "level", note: "Commonly accepted.",
    scenarios: [{ situation: "Managed with medication", outcome: "Usually level" }] },
  { slug: "sarcoidosis", name: "Sarcoidosis", tier: "level", note: "Commonly accepted when it doesn't involve oxygen use.",
    scenarios: [
      { situation: "Mild, no oxygen use", outcome: "Usually level" },
      { situation: "Requires home oxygen", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "sleep-apnea", name: "Sleep Apnea", tier: "level", note: "Treated with a CPAP machine, it's usually a non-issue rather than a red flag.",
    scenarios: [
      { situation: "Diagnosed and using a CPAP machine", outcome: "Almost always level" },
      { situation: "Diagnosed but untreated", outcome: "Can move to graded with some carriers" },
    ] },
  { slug: "smokers-tobacco-users", name: "Smokers & Tobacco Users", tier: "level", note: "Tobacco use affects your rate, not your eligibility — day-one coverage is still available at a tobacco rate.",
    scenarios: [{ situation: "Any typical case", outcome: "Level coverage at a tobacco-rated premium" }] },
  { slug: "social-security-disability", name: "Social Security Disability", tier: "time-dependent", note: "The tier follows whatever the underlying diagnosis is, not the disability status itself.",
    scenarios: [{ situation: "Depends entirely on the underlying condition", outcome: "See that condition's own guide" }] },
  { slug: "stent-placement", name: "Stent Placement", tier: "time-dependent", note: "Level coverage is common again around a year after the procedure if you've stayed stable.",
    scenarios: [
      { situation: "12+ months out, stable, no further procedures", outcome: "Often level" },
      { situation: "Within the last 12 months", outcome: "Usually graded or modified" },
    ] },
  { slug: "stroke", name: "Stroke", tier: "time-dependent", note: "Level coverage commonly opens up around a year out; a mini-stroke (TIA) is often treated more leniently.",
    scenarios: [
      { situation: "12+ months out, stable, or a TIA (mini-stroke)", outcome: "Often level with select carriers" },
      { situation: "Within the last 12 months, or recurring events", outcome: "Usually graded or modified" },
    ] },
  { slug: "thyroid-disease", name: "Thyroid Disease", tier: "level", note: "Commonly accepted.",
    scenarios: [{ situation: "Managed with medication", outcome: "Almost always level" }],
    medications: [{ name: "Levothyroxine (Synthroid)", note: "Extremely common and generally a non-issue for underwriting." }] },
];

export function findCondition(slug: string): ConditionFact | undefined {
  return CONDITIONS.find((c) => c.slug === slug);
}

// Groups the A–Z list by body system / condition type for the browse-by-condition widgets.
// A different axis than Tier above (which groups by underwriting outcome) — this one is purely
// for scanability, so visitors can jump to the area relevant to them instead of reading straight
// down an alphabetical wall.
export const CONDITION_CATEGORIES: { label: string; slugs: string[] }[] = [
  { label: "Heart & Circulatory", slugs: [
    "aortic-aneurysm", "afib", "blood-clots-dvt-pe", "bypass-surgery", "congestive-heart-failure",
    "heart-attack", "heart-valve-disease", "high-blood-pressure", "high-cholesterol",
    "pacemaker-defibrillator", "peripheral-artery-disease", "stent-placement", "stroke",
  ] },
  { label: "Respiratory", slugs: ["asthma", "copd", "home-oxygen", "sleep-apnea", "smokers-tobacco-users"] },
  { label: "Diabetes & Metabolic", slugs: ["diabetes", "diabetic-amputation", "obesity-bmi-over-40", "thyroid-disease"] },
  { label: "Cancer", slugs: ["cancer-history"] },
  { label: "Neurological", slugs: ["dementia-alzheimers", "epilepsy-seizures", "multiple-sclerosis", "neuropathy", "parkinsons-disease"] },
  { label: "Mental & Behavioral Health", slugs: ["alcohol-use-history", "bipolar-disorder", "depression-anxiety"] },
  { label: "Digestive & Liver", slugs: ["chronic-pancreatitis", "cirrhosis-liver-disease", "crohns-colitis-ibd", "hepatitis-c"] },
  { label: "Kidney, Organs & Immune", slugs: ["kidney-disease", "organ-transplant", "hiv-aids"] },
  { label: "Autoimmune & Joint", slugs: ["fibromyalgia", "lupus", "osteoporosis", "rheumatoid-arthritis", "sarcoidosis"] },
  { label: "Other", slugs: ["adl-limitations", "enlarged-prostate", "social-security-disability"] },
];
