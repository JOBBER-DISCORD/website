"use client";

import { usePathname } from "next/navigation";

export default function MissingPath() {
  const pathname = usePathname();
  return <>{pathname || "/this-page"}</>;
}
