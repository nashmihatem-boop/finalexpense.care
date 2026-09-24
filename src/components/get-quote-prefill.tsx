"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { stateFromZip, stateName } from "@/lib/us-states";

// The hero's quick-start card (and any coverage-by-state page) sends visitors to
// /get-quote?zip=...&firstName=...&lastName=... The LeadForms widget (useleadbot.com) renders
// its own fields asynchronously into #leadforms-embd-form, one step at a time, so there's no
// single moment to "prefill the form" — instead this watches the container and fills each
// field the moment it appears, once, and only if the visitor hasn't already typed something in
// it themselves.
//
// Field names (verified against the live widget, not guessed): the state <select> uses
// "Name|||Name" as its option value; zip is input[name="zip-code"]; first/last name are
// input[name="first-name"] / input[name="last-name"] on a later step.
function setNativeValue(el: HTMLInputElement | HTMLSelectElement, value: string) {
  const proto = el instanceof HTMLSelectElement ? window.HTMLSelectElement.prototype : window.HTMLInputElement.prototype;
  const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
  setter?.call(el, value);
  el.dispatchEvent(new Event(el instanceof HTMLSelectElement ? "change" : "input", { bubbles: true }));
  if (el instanceof HTMLInputElement) el.dispatchEvent(new Event("change", { bubbles: true }));
}

export function GetQuotePrefill() {
  const params = useSearchParams();
  const zip = params.get("zip");
  const firstName = params.get("firstName");
  const lastName = params.get("lastName");
  const filledZip = useRef(false);
  const filledName = useRef(false);
  const state = zip ? stateName(stateFromZip(zip) ?? "") : undefined;

  useEffect(() => {
    if (!zip && !firstName && !lastName) return;
    const container = document.getElementById("leadforms-embd-form");
    if (!container) return;

    function tryFill() {
      if (!container) return;
      if (zip && !filledZip.current) {
        const zipInput = container.querySelector<HTMLInputElement>('input[name="zip-code"]');
        const stateSelect = container.querySelector<HTMLSelectElement>("select");
        if (zipInput && !zipInput.value) {
          setNativeValue(zipInput, zip);
          if (state && stateSelect && !stateSelect.value) {
            setNativeValue(stateSelect, `${state}|||${state}`);
          }
          filledZip.current = true;
        }
      }
      if ((firstName || lastName) && !filledName.current) {
        const firstInput = container.querySelector<HTMLInputElement>('input[name="first-name"]');
        const lastInput = container.querySelector<HTMLInputElement>('input[name="last-name"]');
        if (firstInput && lastInput) {
          if (firstName && !firstInput.value) setNativeValue(firstInput, firstName);
          if (lastName && !lastInput.value) setNativeValue(lastInput, lastName);
          filledName.current = true;
        }
      }
    }

    // Debounced on purpose: the widget does a lot of its own rapid DOM churn while it
    // initializes (WebSocket-driven updates, its own re-renders), and calling tryFill on every
    // single mutation synchronously was firing dozens of times a second during that window —
    // confirmed live to actually break the widget's own init (it rendered blank whenever the
    // page loaded with zip/firstName/lastName params present, worked fine without them).
    // Waiting for a brief quiet period before touching the DOM avoids racing that init entirely.
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    function scheduleFill() {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(tryFill, 200);
    }

    scheduleFill();
    const observer = new MutationObserver(scheduleFill);
    observer.observe(container, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [zip, firstName, lastName, state]);

  return null;
}
