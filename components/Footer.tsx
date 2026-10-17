import { cacheLife } from "next/cache";
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
        <span>
          © <CurrentYear /> Jobify
        </span>
      </div>
    </footer>
  );
}
