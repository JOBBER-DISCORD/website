import { brands } from "@/lib/companies";
import { eyebrow, wrap } from "@/lib/styles";

export default function LogoStrip() {
  return (
    <div className={`${wrap} pt-6 pb-16 text-center`}>
      <p className={eyebrow}>Jobify users have gotten jobs at</p>
      <div className="mt-5 flex flex-wrap justify-center gap-x-11 gap-y-3.5 font-display text-[22px] font-extrabold tracking-[-0.03em] text-muted opacity-80">
        {brands.map((brand) => (
          <span
            className="inline-flex items-center gap-[9px] transition-colors duration-200 hover:text-ink"
            key={brand.name}
          >
            <svg
              className="flex-none"
              viewBox={brand.viewBox}
              width={brand.width}
              height={brand.height}
              fill="currentColor"
              role={brand.showName ? undefined : "img"}
              aria-label={brand.showName ? undefined : brand.name}
              aria-hidden={brand.showName ? true : undefined}
            >
              <path d={brand.path} />
            </svg>
            {brand.showName && brand.name}
          </span>
        ))}
      </div>
    </div>
  );
}
