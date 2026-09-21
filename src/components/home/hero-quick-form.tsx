"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField } from "@/components/ui/text-field";
import { Button } from "@/components/ui/button";

/**
 * A compact "start here" capture in the hero — ZIP + name only, no page navigation required
 * to begin. It hands off into the full /get-quote quiz (via query params the quiz reads on
 * mount to pre-fill those same fields) rather than duplicating the DOB/coverage/consent
 * questions here — this is step zero of one flow, not a second, competing form.
 */
export function HeroQuickForm() {
  const router = useRouter();
  const [zip, setZip] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const valid = /^\d{5}$/.test(zip) && firstName.trim().length > 0 && lastName.trim().length > 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    const params = new URLSearchParams({ zip, firstName: firstName.trim(), lastName: lastName.trim() });
    router.push(`/get-quote?${params.toString()}`);
  }

  return (
    <div className="rounded-2xl border border-mist bg-canvas-raised p-6 shadow-[0_12px_32px_rgba(20,43,86,0.12)] sm:p-8">
      <p className="text-center font-display text-lg font-extrabold text-harbor sm:text-xl">
        See Your Coverage Options Today
      </p>

      <div className="mt-5 rounded-xl bg-canvas-alt p-4">
        <p className="text-sm font-bold text-harbor">Check what you may qualify for</p>
        <p className="mt-1 text-xs font-bold tracking-wide text-harbor-mid uppercase">
          Step 1 of 2 — Basic Info
        </p>
        <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-mist">
          <div className="h-full w-1/2 rounded-full bg-harbor-mid" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <TextField
          label="ZIP Code *"
          inputMode="numeric"
          maxLength={5}
          autoComplete="postal-code"
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
        />
        <TextField
          label="First Name *"
          autoComplete="given-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name *"
          autoComplete="family-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Button as="button" type="submit" size="lg" className="w-full" disabled={!valid}>
          Next
        </Button>
      </form>
    </div>
  );
}
