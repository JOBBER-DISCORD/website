type ButtonVariant = "ink" | "accent" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const buttonVariants: Record<ButtonVariant, string> = {
  ink: "border-transparent bg-ink text-bg",
  accent: "border-transparent bg-accent text-accent-ink",
  ghost: "border-line bg-transparent text-ink",
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "h-[38px] px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-5 text-[15px]",
};

export function button(variant: ButtonVariant, size: ButtonSize = "md") {
  return `inline-flex cursor-pointer items-center gap-2 rounded-full border font-semibold transition-transform duration-150 hover:-translate-y-px ${buttonVariants[variant]} ${buttonSizes[size]}`;
}

export const wrap = "mx-auto max-w-[1160px] px-5";

export const eyebrow = "font-mono text-xs uppercase tracking-[0.08em] text-muted";

export const strike =
  "relative font-bold text-muted after:absolute after:-left-[2%] after:-right-[2%] after:top-[54%] after:h-[0.09em] after:-rotate-2 after:rounded after:bg-accent after:content-['']";

export const jobCard = {
  card: "rounded-[14px] border border-line bg-surface p-4 text-left",
  top: "flex items-center gap-2.5",
  logo: "grid size-[34px] flex-none place-items-center rounded-[9px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]",
  company: "text-[13px] leading-[1.2] text-muted",
  title: "mt-3 mb-1 text-base font-bold leading-[1.25] tracking-[-0.01em] text-balance",
  meta: "text-[12.5px] text-muted",
  foot: "mt-3.5 flex items-center justify-between gap-2",
  match: "font-mono text-xs text-ink",
  matchBar:
    "relative mr-1.5 inline-block h-1 w-11 overflow-hidden rounded bg-line align-middle after:absolute after:inset-y-0 after:left-0 after:w-(--m) after:rounded after:bg-accent after:content-['']",
};

export type PillStatus = "found" | "applied" | "interview" | "offer" | "ghosted";

const pillStatuses: Record<PillStatus, string> = {
  found: "bg-line text-muted",
  applied: "bg-info-soft text-info",
  interview: "bg-warn-soft text-warn",
  offer: "bg-ok-soft text-ok",
  ghosted: "bg-line text-muted line-through",
};

export function pill(status: PillStatus) {
  return `whitespace-nowrap rounded-full px-[9px] py-[3px] text-[11.5px] font-semibold ${pillStatuses[status]}`;
}
