import { IconArrowRight } from "./Icons";
import { buttonClasses } from "./Button";

const SPECS = [
  { label: "Pile", value: "80% wool / 20% nylon" },
  { label: "Weight", value: "50oz twist pile" },
  { label: "Width", value: "4m & 5m rolls" },
  { label: "Guarantee", value: "10 years, domestic" },
];

export default function Spotlight() {
  return (
    <section
      id="spotlight"
      className="relative overflow-hidden py-28 px-8 bg-espresso text-parchment max-[680px]:py-[72px] max-[680px]:px-5"
    >
      <div
        data-anim="spotlight-glow"
        className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(254,127,2,0.22)_0%,rgba(254,127,2,0)_60%)] pointer-events-none will-change-[transform,opacity]"
      />
      <div className="relative max-w-[1200px] mx-auto grid grid-cols-[1fr_1.1fr] gap-[72px] items-center max-[1100px]:grid-cols-1 max-[1100px]:gap-12">
        <div
          data-anim="spotlight-img"
          className="anim-scale-in aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative bg-espresso-soft"
        >
          <img
            src="/assets/temp-flooring/collection-temp.jpg"
            alt="Ardmore wool carpet detail — placeholder"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-5 left-5 bg-espresso/80 backdrop-blur-md text-parchment py-2 px-3.5 rounded-full text-[11px] font-semibold leading-none uppercase tracking-[0.1em]">
            Ardmore · Oatmeal
          </div>
        </div>
        <div>
          <div
            data-anim="spotlight-eyebrow"
            className="anim-fade-up text-xs font-semibold leading-none uppercase tracking-[0.14em] text-brass mb-4"
          >
            Range spotlight
          </div>
          <h2
            data-anim="spotlight-title"
            className="anim-fade-up font-display font-bold text-[52px] leading-[1.05] tracking-[-0.02em] text-parchment m-0 mb-5 text-balance max-[1100px]:text-[42px] max-[680px]:text-[34px]"
          >
            The <em className="italic font-medium text-brass">Ardmore</em>{" "}
            Collection
          </h2>
          <p
            data-anim="spotlight-lede"
            className="anim-fade-up text-lg leading-[1.6] text-dust m-0 mb-8 max-w-[520px]"
          >
            A dense, 50-ounce twist-pile wool carpet woven in Yorkshire.
            Hard-wearing, warm underfoot, and made to take the knocks of a busy
            home — without losing the soft finish you&apos;d want in a bedroom.
          </p>
          <div
            data-anim="spotlight-specs"
            className="anim-fade-up grid grid-cols-2 mb-9 border border-border-dark rounded-xl bg-espresso-soft overflow-hidden max-[680px]:grid-cols-1"
          >
            {SPECS.map((s, i, arr) => {
              const isEven = i % 2 === 0;
              const isRow0 = i < 2;
              const isLast = i === arr.length - 1;
              return (
                <div
                  key={s.label}
                  className={[
                    "py-5 px-[22px] border-border-dark",
                    isEven && "border-r",
                    isRow0 && "border-b",
                    "max-[680px]:border-r-0",
                    !isLast && "max-[680px]:border-b",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className="text-[11px] font-semibold leading-none uppercase tracking-[0.1em] text-dust mb-2">
                    {s.label}
                  </div>
                  <div className="font-display font-semibold text-base leading-[1.3] text-parchment">
                    {s.value}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            data-anim="spotlight-ctas"
            className="anim-fade-up flex gap-3.5 items-center flex-wrap"
          >
            <a className={buttonClasses("pill")} href="#showroom">
              See it in the showroom <IconArrowRight size={16} />
            </a>
            <button type="button" className={buttonClasses("outline-light")}>
              Request a sample
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
