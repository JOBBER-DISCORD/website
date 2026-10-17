import Image from "next/image";
import { brands } from "@/lib/companies";
import { eyebrow, wrap } from "@/lib/styles";

export default function LogoStrip() {
  return (
    <div className={`${wrap} pt-6 pb-16 text-center`}>
      <p className={eyebrow}>Jobify users have gotten jobs at</p>
      <div className="mt-5 flex flex-wrap justify-center gap-x-11 gap-y-3.5 font-display text-[22px] font-extrabold tracking-[-0.03em] text-muted opacity-80">
        {brands.map((brand) => (
          <span
            className="group inline-flex items-center gap-[9px] transition-colors duration-200 hover:text-ink"
            key={brand.name}
          >
            <Image
              className="flex-none rounded-[7px] grayscale transition-[filter] duration-200 group-hover:grayscale-0"
              src={brand.logo}
              alt=""
              width={26}
              height={26}
            />
            {brand.name}
          </span>
        ))}
      </div>
    </div>
  );
}
