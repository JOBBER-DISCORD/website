import type { Metadata } from "next";
import Link from "next/link";
import { Suspense, type CSSProperties } from "react";
import Footer from "@/components/Footer";
import MissingPath from "@/components/MissingPath";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Page not found — Jobber",
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
      <main className="nf wrap">
        <p className="eyebrow">Error 404</p>
        <h1>
          This page <span className="strike">replied</span> ghosted you.
        </h1>
        <p className="nf-sub">
          Happens to the best of us. The page you applied to doesn&apos;t exist, or it moved without
          telling anyone.
        </p>

        <article className="job nf-card">
          <div className="job-top">
            <span className="co nf-co">404</span>
            <span className="job-co">
              jobber.ai
              <br />
              Salary: undisclosed
            </span>
          </div>
          <h4 className="nf-path">
            <Suspense fallback="/this-page">
              <MissingPath />
            </Suspense>
          </h4>
          <div className="job-meta">Location unknown</div>
          <ol className="nf-log">
            {log.map((line) => (
              <li key={line.time} className={line.tone === "warn" ? "warn" : undefined}>
                <time>{line.time}</time>
                <span>{line.text}</span>
              </li>
            ))}
          </ol>
          <div className="job-foot">
            <span className="match" style={{ "--m": "0%" } as CSSProperties}>
              <i />
              0%
            </span>
            <span className="pill ghosted">Ghosted</span>
          </div>
        </article>

        <div className="nf-ctas">
          <Link className="btn btn-ink" href="/">
            Back to the homepage
          </Link>
          <Link className="btn btn-ghost" href="/#top">
            Join the waitlist
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
