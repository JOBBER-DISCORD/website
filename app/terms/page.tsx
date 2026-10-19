import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { CONTACT_EMAIL } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Jobify",
  description: "The terms that apply when you use Jobify or join the waitlist.",
};

const summary = [
  "Jobify is in early access, so features will change and some things may break.",
  "When auto-apply is on, Jobify submits applications in your name. Keep what you give us truthful.",
  "We can't promise interviews or offers. Employers make their own decisions.",
  "Don't misuse Jobify. If you do, we may suspend your access.",
];

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="2026-10-18" summary={summary}>
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) are an agreement between
        you and Jobify Inc (&ldquo;Jobify&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;). They cover jobify.cc, the Jobify waitlist, and the
        Jobify app and beta features (together, the &ldquo;Service&rdquo;). By
        using the Service, you agree to these Terms. If you don&apos;t agree,
        please don&apos;t use it.
      </p>
      <p>
        The short version above is there to help. The full Terms below are what
        apply. Our <Link href="/privacy">Privacy Policy</Link> explains how we
        handle your information.
      </p>

      <h2>Using Jobify</h2>
      <ul>
        <li>
          You must be at least 16 years old to use the Service. If you&apos;re
          under the age of majority where you live, you need a parent or
          guardian&apos;s permission.
        </li>
        <li>
          Joining the waitlist doesn&apos;t guarantee that you&apos;ll get
          access to the Service, or that you&apos;ll get it by a particular
          date.
        </li>
        <li>
          If you create an account, keep your login details secure. You&apos;re
          responsible for activity on your account. Tell us right away if you
          think someone else has used it.
        </li>
        <li>
          The information you give us, including your resume and profile, must
          be accurate and yours to share.
        </li>
      </ul>

      <h2>Early access</h2>
      <p>
        Jobify is in early access. Features may be incomplete, change without
        notice, have usage limits, or be removed. We may pause or end the beta
        at any time. Keep your own copies of anything important, like your
        resume.
      </p>

      <h2>Applying for jobs on your behalf</h2>
      <p>
        When you turn on features that apply for you, you authorize Jobify to
        search for roles that match your preferences, prepare application
        materials from the information you give us, and submit applications to
        employers and job platforms in your name.
      </p>
      <ul>
        <li>
          You&apos;re responsible for what&apos;s submitted in your name. Keep
          your profile truthful and up to date. Don&apos;t ask Jobify to
          misstate your experience, education, work authorization or anything
          else.
        </li>
        <li>
          Tailored resumes and answers are generated with automated tools,
          including AI, and can contain mistakes. Review what Jobify prepares
          whenever you can.
        </li>
        <li>
          Employers and job platforms are independent third parties. Their own
          terms and privacy policies apply to the applications they receive, and
          some may limit or reject automated applications. We aren&apos;t
          responsible for how they handle your application.
        </li>
        <li>
          You can turn auto-apply off at any time. Turning it off stops new
          applications. It can&apos;t recall applications that were already
          sent.
        </li>
      </ul>

      <h2>No guarantee of results</h2>
      <p>
        Jobify helps you apply. It can&apos;t make anyone hire you. We
        don&apos;t guarantee that you&apos;ll get responses, interviews or
        offers, or that any job listing is accurate, still open or legitimate.
        Salary ranges and other job details we show come from public postings
        and other sources, and they may be incomplete or out of date.
      </p>
      <p>
        Jobify isn&apos;t an employer, recruiter or staffing agency. Nothing in
        the Service is career, legal, financial or immigration advice.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          use the Service to break the law or violate anyone else&apos;s rights
        </li>
        <li>
          impersonate anyone, or apply for jobs in someone else&apos;s name
        </li>
        <li>
          submit false, misleading or plagiarized information to employers
        </li>
        <li>use the Service to harass employers, recruiters or anyone else</li>
        <li>
          interfere with, overload, probe or get around the security of the
          Service
        </li>
        <li>
          copy, scrape, reverse engineer or resell the Service, except where the
          law allows it
        </li>
      </ul>

      <h2>Your content</h2>
      <p>
        You own the resume, profile details and other material you give us
        (&ldquo;Your Content&rdquo;). You give Jobify a worldwide,
        non-exclusive, royalty-free license to host, use, copy, adapt and share
        Your Content only as needed to run and improve the Service. For example,
        we use it to tailor your resume and send it to an employer Jobify
        applies to for you. This license ends when you delete Your Content or
        your account, except for applications already sent and copies we keep as
        described in our <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <p>
        If you send us feedback or ideas, we may use them without any obligation
        to you.
      </p>

      <h2>Our property</h2>
      <p>
        The Service, including the Jobify name, logo, software and website,
        belongs to Jobify and its licensors. These Terms don&apos;t give you any
        rights to them beyond using the Service as these Terms allow.
      </p>
      <p>
        Company names and logos shown on our website belong to their owners and
        are used only to identify those companies. Showing them doesn&apos;t
        mean those companies endorse or partner with Jobify.
      </p>

      <h2>Fees</h2>
      <p>
        The waitlist and the current beta are free. If we introduce paid plans,
        we&apos;ll show you the price and terms before you&apos;re charged. You
        won&apos;t be charged unless you agree.
      </p>

      <h2>Ending your use</h2>
      <p>
        You can stop using the Service at any time. To have your account and
        data deleted, email us. We may suspend or end your access if you break
        these Terms, if we need to in order to protect the Service or other
        people, or if we discontinue the Service. Sections that by their nature
        should continue to apply, such as ownership, disclaimers and limits on
        liability, still apply after your access ends.
      </p>

      <h2>Disclaimers</h2>
      <p>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo;. To the fullest extent permitted by law, Jobify
        disclaims all warranties, express or implied, including warranties of
        merchantability, fitness for a particular purpose and non-infringement,
        and any warranty that the Service will be uninterrupted, error-free or
        secure.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Jobify won&apos;t be liable for
        any indirect, incidental, special, consequential or punitive damages, or
        for lost profits, earnings, opportunities or data, arising from your use
        of the Service. Jobify&apos;s total liability for any claim relating to
        the Service is limited to the greater of what you paid us in the 12
        months before the claim or US$100.
      </p>
      <p>
        Some places don&apos;t allow these limits, so they may not apply to you.
        Nothing in these Terms limits rights you have under laws that can&apos;t
        be waived by contract.
      </p>

      <h2>Indemnity</h2>
      <p>
        If you break these Terms or the law while using the Service, you agree
        to cover the losses and costs, including reasonable legal fees, that
        Jobify incurs from claims made by others as a result, to the extent the
        law allows.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the jurisdiction where Jobify
        Inc is incorporated, without regard to its conflict-of-laws rules,
        unless the law where you live requires otherwise. Before filing a claim,
        please contact us so we can try to resolve it informally.
      </p>

      <h2>Changes to these Terms</h2>
      <p>
        We may update these Terms as the Service changes. When we do, we&apos;ll
        post the new version here and update the date at the top. If a change is
        significant, we&apos;ll notify you before it takes effect, for example
        by email. If you keep using the Service after a change takes effect, you
        accept the updated Terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
