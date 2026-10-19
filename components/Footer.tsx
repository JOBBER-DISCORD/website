import { cacheLife } from "next/cache";
import Link from "next/link";
import Logo from "./Logo";

async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="border-t border-line py-9 text-sm text-muted">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-x-8 gap-y-4 px-5">
        <Logo />
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link
            className="transition-colors duration-150 hover:text-ink"
            href="/terms"
          >
            Terms
          </Link>
          <Link
            className="transition-colors duration-150 hover:text-ink"
            href="/privacy"
          >
            Privacy
          </Link>
          <span>
            © <CurrentYear /> Jobify Inc
          </span>
        </div>
      </div>
    </footer>
  );
}
