import { cacheLife } from "next/cache";
import Logo from "./Logo";

async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <Logo />
        <span>
          © <CurrentYear /> Jobber
        </span>
      </div>
    </footer>
  );
}
