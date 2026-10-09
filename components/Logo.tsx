import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link className="logo" href="/#top">
      <Image className="logo-mark" src="/logo.svg" alt="" width={28} height={28} unoptimized priority />
      Jobber
    </Link>
  );
}
