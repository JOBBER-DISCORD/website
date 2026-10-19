import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { CONTACT_EMAIL } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Jobify",
  description:
    "What information Jobify collects, how we use it, and the choices you have.",
};

const summary = [
  "On this website, the only personal information we ask for is the email you use to join the waitlist.",
  "We use your information to run Jobify, including sending the applications it makes for you. We don't sell it.",
  "This website has no analytics or advertising trackers.",
  "Email us any time to see, correct or delete your information.",
];

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="2026-10-18" summary={summary}>
      <p>
        This Privacy Policy explains how Jobify Inc (&ldquo;Jobify&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses and shares personal
        information when you visit jobify.cc, join our waitlist, or use the
        Jobify app and beta features (together, the &ldquo;Service&rdquo;). It
        should be read alongside our <Link href="/terms">Terms of Service</Link>
        .
      </p>

      <h2>What we collect</h2>
      <p>
        <strong>When you join the waitlist.</strong> Your email address and the
        time you signed up.
      </p>
      <p>
        <strong>When you visit the website.</strong> Like most websites, our
        hosting and infrastructure providers automatically receive technical
        information with each request, such as your IP address, browser and
        device type, and the pages you load. It&apos;s used to deliver the site,
        keep it secure and fix problems. We don&apos;t run analytics or
        advertising trackers on this website.
      </p>
      <p>
        <strong>When you use the Service.</strong> To find roles and apply for
        you, we collect the information you give us, such as:
      </p>
      <ul>
        <li>your name, contact details and location</li>
        <li>
          your resume, work history, education, skills, and links like a
          portfolio or LinkedIn profile
        </li>
        <li>
          your job preferences, such as roles, locations, salary and work
          authorization
        </li>
        <li>your answers to application questions</li>
        <li>
          a record of the jobs we find, the applications we prepare and send,
          and their status
        </li>
      </ul>
      <p>
        Some employers ask optional questions about things like gender,
        ethnicity, disability or veteran status. Answering is always optional.
        We share those answers only with the employers you apply to.
      </p>
      <p>
        <strong>Accounts you connect.</strong> If you connect another account,
        such as an email inbox to track replies from employers, we receive the
        information that connection gives us. We use it only to provide the
        feature you turned on.
      </p>
      <p>
        <strong>When you contact us.</strong> Your contact details and what you
        tell us.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>
          to run the waitlist and email you about early access, launches and
          updates to Jobify
        </li>
        <li>
          to provide the Service, including matching you with roles, tailoring
          your resume and answers, and submitting and tracking applications
        </li>
        <li>to answer your questions and give you support</li>
        <li>to keep the Service secure and prevent fraud and abuse</li>
        <li>to understand how the Service is used and make it better</li>
        <li>to comply with the law and enforce our Terms</li>
      </ul>
      <p>
        We don&apos;t sell your personal information, and we don&apos;t use it
        for targeted advertising.
      </p>
      <p>
        If you&apos;re in the European Economic Area or the UK, we rely on these
        legal bases: performing our contract with you when we provide the
        Service, your consent (for example, when you join the waitlist or
        connect an account), our legitimate interests in securing and improving
        the Service, and our legal obligations. You can withdraw your consent at
        any time.
      </p>

      <h2>How we share it</h2>
      <ul>
        <li>
          <strong>Employers and job platforms.</strong> When Jobify applies to a
          job for you, we send your application to that employer, often through
          the hiring platform it uses. They handle your application under their
          own privacy policies.
        </li>
        <li>
          <strong>Service providers.</strong> Companies that help us run the
          Service, such as hosting, and AI model providers that help tailor your
          materials. They process information on our behalf and only as needed
          to provide their services to us.
        </li>
        <li>
          <strong>Legal and safety reasons.</strong> When the law requires it,
          or when we believe it&apos;s necessary to protect the rights, property
          or safety of Jobify, our users or others.
        </li>
        <li>
          <strong>Business changes.</strong> If Jobify is involved in a merger,
          acquisition or sale of assets, your information may be transferred as
          part of that deal, and this policy will continue to apply to it.
        </li>
        <li>
          <strong>With your permission.</strong> In any other case, only when
          you ask us to or agree to it.
        </li>
      </ul>

      <h2>Cookies</h2>
      <p>
        This website doesn&apos;t use cookies for analytics or advertising. The
        Jobify app may use cookies and similar storage to keep you signed in. If
        we add cookies that aren&apos;t strictly necessary, we&apos;ll update
        this policy and ask for your consent where the law requires it.
      </p>

      <h2>How long we keep it</h2>
      <ul>
        <li>
          <strong>Waitlist emails</strong> are kept until you ask us to remove
          yours, or until we no longer need them for the waitlist and launch.
        </li>
        <li>
          <strong>Account information</strong> is kept while your account is
          open. When you delete your account, we delete or anonymize your
          information, except what we need to keep to meet legal obligations,
          resolve disputes or enforce our agreements.
        </li>
      </ul>
      <p>
        Applications that were already sent are held by the employers who
        received them. Contact them directly to have those removed.
      </p>

      <h2>Your choices and rights</h2>
      <ul>
        <li>
          You can unsubscribe from our emails using the link in any email we
          send, or by contacting us.
        </li>
        <li>
          Depending on where you live, you may have the right to access,
          correct, delete or get a copy of your personal information, to object
          to or restrict how we use it, and to withdraw consent. To make a
          request, email us. We&apos;ll respond within the time the law
          requires, and we may need to verify your identity first.
        </li>
        <li>
          We won&apos;t treat you differently for exercising your privacy
          rights.
        </li>
        <li>
          If you&apos;re unhappy with how we&apos;ve handled your information,
          you can complain to your local data protection authority. We&apos;d
          appreciate the chance to sort it out with you first.
        </li>
      </ul>

      <h2>Security</h2>
      <p>
        We use reasonable technical and organizational safeguards to protect
        your information. No system is perfectly secure, so we can&apos;t
        guarantee absolute security.
      </p>

      <h2>Where your information is processed</h2>
      <p>
        Jobify and our service providers may process your information in
        countries other than the one you live in, including the United States.
        Those countries may have different data protection laws. When we
        transfer personal information across borders, we protect it as the
        applicable law requires.
      </p>

      <h2>Children</h2>
      <p>
        The Service isn&apos;t meant for anyone under 16, and we don&apos;t
        knowingly collect personal information from children under 16. If you
        think a child has given us their information, contact us and we&apos;ll
        delete it.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy as the Service changes. When we do, we&apos;ll
        post the new version here and update the date at the top. If a change is
        significant, we&apos;ll notify you before it takes effect, for example
        by email.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or requests about your information? Email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
