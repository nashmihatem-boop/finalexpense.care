import { Button } from "@/components/ui/button";

export function UrgencyCta() {
  return (
    <section className="bg-gradient-to-r from-harbor-deep via-harbor to-harbor-deep">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
        <h2 className="font-display text-3xl font-extrabold text-canvas sm:text-4xl">
          Don&apos;t wait — rates only go up with age.
        </h2>
        <p className="mt-4 text-lg text-canvas/75">
          Locking in a policy today means locking in today&apos;s rate for life.
        </p>
        <div className="mt-8 flex justify-center">
          <Button as="link" href="/get-quote" size="lg">
            Lock in my rate
          </Button>
        </div>
      </div>
    </section>
  );
}
