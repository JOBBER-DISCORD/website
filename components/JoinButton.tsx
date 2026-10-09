"use client";

import Link from "next/link";
import { button } from "@/lib/styles";
import { WAITLIST_INPUT_ID } from "./WaitlistForm";

export default function JoinButton() {
  return (
    <Link
      className={button("ink", "sm")}
      href="/#top"
      onClick={() => {
        setTimeout(() => {
          document
            .getElementById(WAITLIST_INPUT_ID)
            ?.focus({ preventScroll: true });
        }, 400);
      }}
    >
      Join waitlist
    </Link>
  );
}
