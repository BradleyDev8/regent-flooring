type Variant = "pill" | "outline" | "outline-light";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap cursor-pointer select-none rounded-full border tracking-[0.01em] transition-[background-color,color,border-color,box-shadow,transform] duration-200 active:translate-y-px";

const sizes: Record<Size, string> = {
  md: "text-base leading-tight px-[30px] py-[14px] min-h-[50px]",
  sm: "text-sm leading-snug px-5 py-[10px] min-h-10",
};

const variants: Record<Variant, string> = {
  pill:
    "bg-brass text-ink border-brass shadow-pill hover:bg-espresso hover:text-parchment hover:border-espresso hover:shadow-[0_10px_24px_-8px_rgba(34,28,22,0.45)]",
  outline:
    "bg-transparent text-espresso border-espresso hover:bg-espresso hover:text-parchment",
  "outline-light":
    "bg-transparent text-parchment border-parchment hover:bg-parchment hover:text-espresso",
};

export function buttonClasses(
  variant: Variant = "pill",
  size: Size = "md",
): string {
  return `${base} ${sizes[size]} ${variants[variant]}`;
}
