import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-charcoal/50">Last updated: {updated}</p>
        <div className="prose-legal mt-10 space-y-6 text-base leading-relaxed text-charcoal/85 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:text-harbor [&_h2]:mt-10 [&_h2]:mb-3 [&_a]:text-harbor [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5">
          {children}
        </div>
      </div>
    </div>
  );
}
