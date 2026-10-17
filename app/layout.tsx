import type { Metadata } from "next";
import { Geist, Geist_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const display = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const body = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Jobify is a job bot that finds roles, tailors your resume and applies for you. Join the waitlist.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jobify.cc"),
  title: "Jobify",
  description,
  icons: { icon: "/logo.svg" },
  openGraph: {
    title: "Jobify — Stop applying. Start interviewing.",
    description,
    url: "/",
    siteName: "Jobify",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="overflow-x-hidden bg-bg font-sans text-base leading-[1.55] text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
