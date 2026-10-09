"use client";

import { useState, type FormEvent } from "react";
import { button } from "@/lib/styles";

export const WAITLIST_INPUT_ID = "wl-email";

type Status = "idle" | "submitting" | "done" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState(
    "Sign up for early access to the email beta, job tracking, auto-apply and more 👀",
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem(
      WAITLIST_INPUT_ID,
    ) as HTMLInputElement;

    if (!email || !input.checkValidity()) {
      setStatus("error");
      setMessage("Enter a valid email address, like you@email.com.");
      input.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong.");
      }
      setStatus("done");
      setMessage(`You're on the waitlist. We'll email ${email} when your spot opens.`);
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? `${err.message} Please try again.`
          : "Couldn't join the waitlist. Please try again.",
      );
    }
  }

  const noteColor =
    status === "done" ? "font-semibold text-ok" : status === "error" ? "text-warn" : "text-muted";

  return (
    <>
      <form
        className={`mx-auto mt-[34px] flex max-w-[520px] items-center gap-2 rounded-full border border-line bg-surface p-2 shadow-[0_18px_50px_-20px_color-mix(in_srgb,var(--ink)_30%,transparent)] max-[620px]:flex-col max-[620px]:items-stretch max-[620px]:rounded-[22px] ${status === "done" ? "pointer-events-none opacity-60" : ""}`}
        onSubmit={onSubmit}
        noValidate
      >
        <label
          className="flex min-w-0 flex-1 items-center gap-2.5 pl-3.5 text-left max-[620px]:py-1"
          htmlFor={WAITLIST_INPUT_ID}
        >
          <svg
            className="flex-none text-muted"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
          <input
            className="w-full min-w-0 border-0 bg-transparent py-2 text-[15.5px] text-ink outline-none placeholder:text-muted"
            id={WAITLIST_INPUT_ID}
            name={WAITLIST_INPUT_ID}
            type="email"
            placeholder="you@email.com"
            autoComplete="email"
            aria-label="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button
          className={`${button("accent", "lg")} flex-none max-[620px]:justify-center`}
          type="submit"
          disabled={status === "submitting" || status === "done"}
        >
          {status === "done"
            ? "You're on the list"
            : status === "submitting"
              ? "Joining…"
              : "Join the waitlist"}
        </button>
      </form>
      <p className={`mt-3.5 text-[13.5px] ${noteColor}`} aria-live="polite">
        {message}
      </p>
    </>
  );
}
