import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      className="flex items-center gap-[9px] font-display text-xl font-extrabold tracking-[-0.03em]"
      href="/#top"
    >
      <Image className="block flex-none" src="/logo.svg" alt="" width={28} height={28} unoptimized priority />
      Jobify
    </Link>
  );
}
