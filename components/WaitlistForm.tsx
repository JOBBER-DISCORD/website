"use client";

import { useState, type FormEvent } from "react";

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

  const noteClass =
    status === "done" ? "wl-note ok" : status === "error" ? "wl-note err" : "wl-note";

  return (
    <>
      <form
        className={status === "done" ? "waitlist done" : "waitlist"}
        onSubmit={onSubmit}
        noValidate
      >
        <label htmlFor={WAITLIST_INPUT_ID}>
          <svg
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
          className="btn btn-accent"
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
      <p className={noteClass} aria-live="polite">
        {message}
      </p>
    </>
  );
}
