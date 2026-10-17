import type { Metadata } from "next";
import Link from "next/link";
import { Suspense, type CSSProperties } from "react";
import Footer from "@/components/Footer";
import MissingPath from "@/components/MissingPath";
import Nav from "@/components/Nav";
import { button, eyebrow, jobCard, pill, strike } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Page not found — Jobify",
};

const log = [
  { time: "02:14:07", text: "Searched 34 job boards for this page" },
  { time: "02:14:09", text: "0 matches found" },
  { time: "02:15:41", text: "Sent a follow-up. No reply." },
  { time: "02:17:03", text: "Sent another follow-up. Still nothing." },
  { time: "02:17:04", text: "Marked as ghosted", tone: "warn" },
];

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="mx-auto flex max-w-[1160px] flex-col items-center px-5 pt-[88px] pb-[104px] text-center">
        <p className={eyebrow}>Error 404</p>
        <h1 className="mt-[18px] max-w-[14ch] font-display text-[clamp(40px,7vw,80px)] font-black leading-[0.98] tracking-[-0.045em] text-balance">
          This page <span className={strike}>replied</span> ghosted you.
        </h1>
        <p className="mt-5 max-w-[46ch] text-lg text-muted">
          Happens to the best of us. The page you applied to doesn&apos;t exist, or it moved without
          telling anyone.
        </p>

        <article
          className={`${jobCard.card} mt-12 w-full max-w-[400px] -rotate-2 shadow-[0_24px_60px_-28px_color-mix(in_srgb,var(--ink)_40%,transparent)]`}
        >
          <div className={jobCard.top}>
            <span className={`${jobCard.logo} bg-ink font-mono text-[11px] font-medium text-bg`}>404</span>
            <span className={jobCard.company}>
              jobify.cc
              <br />
              Salary: undisclosed
            </span>
          </div>
          <h4 className={`${jobCard.title} font-mono [overflow-wrap:anywhere]`}>
            <Suspense fallback="/this-page">
              <MissingPath />
            </Suspense>
          </h4>
          <div className={jobCard.meta}>Location unknown</div>
          <ol className="mt-4 grid gap-1.5 border-t border-dashed border-line pt-3.5 font-mono text-xs text-muted">
            {log.map((line) => (
              <li key={line.time} className={`flex gap-3 ${line.tone === "warn" ? "text-warn" : ""}`}>
                <time className="flex-none tabular-nums opacity-70">{line.time}</time>
                <span>{line.text}</span>
              </li>
            ))}
          </ol>
          <div className={jobCard.foot}>
            <span className={jobCard.match} style={{ "--m": "0%" } as CSSProperties}>
              <i className={jobCard.matchBar} />
              0%
            </span>
            <span className={pill("ghosted")}>Ghosted</span>
          </div>
        </article>

        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          <Link className={button("ink")} href="/">
            Back to the homepage
          </Link>
          <Link className={button("ghost")} href="/#top">
            Join the waitlist
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
