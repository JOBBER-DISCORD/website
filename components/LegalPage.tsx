import type { ReactNode } from "react";
import { eyebrow } from "@/lib/styles";
import Footer from "./Footer";
import Nav from "./Nav";

export const CONTACT_EMAIL = "hello@jobify.cc";

const prose =
  "mt-12 text-[16.5px] text-muted [&_a]:font-medium [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-[26px] [&_h2]:font-extrabold [&_h2]:leading-tight [&_h2]:tracking-[-0.03em] [&_h2]:text-ink [&_li]:mt-2 [&_p]:mt-4 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5";

const dateFormat = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
  timeZone: "UTC",
});

type Props = {
  title: string;
  /** ISO date, e.g. "2026-10-18". */
  updated: string;
  summary: string[];
  children: ReactNode;
};

export default function LegalPage({
  title,
  updated,
  summary,
  children,
}: Props) {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[760px] px-5 pt-[72px] pb-[104px]">
        <p className={eyebrow}>Legal</p>
        <h1 className="mt-[18px] font-display text-[clamp(40px,7vw,68px)] font-black leading-[0.98] tracking-[-0.045em] text-balance">
          {title}
        </h1>
        <p className="mt-4 text-muted">
          Last updated{" "}
          <time dateTime={updated}>{dateFormat.format(new Date(updated))}</time>
        </p>

        <section
          className="mt-10 rounded-[14px] border border-line bg-surface p-5 sm:p-6"
          aria-label="Summary"
        >
          <p className={eyebrow}>The short version</p>
          <ul className="mt-3 grid gap-2.5">
            {summary.map((item) => (
              <li className="flex gap-3" key={item}>
                <span
                  className="mt-[9px] size-1.5 flex-none rounded-full bg-accent"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className={prose}>{children}</div>
      </main>
      <Footer />
    </>
  );
}
