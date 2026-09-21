export type QuizState = {
  gender?: "male" | "female";
  birthMonth?: number;
  birthDay?: number;
  birthYear?: number;
  coverageAmount?: string;
  zip?: string;
  state?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  consent?: boolean;
};

export type StepProps = {
  value: QuizState;
  update: (patch: Partial<QuizState>) => void;
  onNext: () => void;
  onBack?: () => void;
};
