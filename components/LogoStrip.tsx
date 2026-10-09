import { brands } from "@/lib/companies";

export default function LogoStrip() {
  return (
    <div className="logos wrap">
      <p className="eyebrow">Jobber users have gotten jobs at</p>
      <div className="row">
        {brands.map((brand) => (
          <span className="brand" key={brand.name}>
            <svg
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
