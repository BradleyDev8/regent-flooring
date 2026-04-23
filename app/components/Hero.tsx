import { IconArrowRight, IconClock, IconMapPin, IconRuler } from "./Icons";
import { buttonClasses } from "./Button";

const SWATCHES = [
  { url: "/assets/materials/carpet-wool-beige.svg", title: "Wool beige" },
  { url: "/assets/temp-flooring/oak-floor.png", title: "Oak" },
  { url: "/assets/temp-flooring/solid-wood.jpg", title: "Herringbone" },
  { url: "/assets/temp-flooring/lvt-flooring.jpg", title: "LVT stone" },
];

const trustItem = "text-sm leading-[1.4] text-coffee font-medium flex items-center gap-2.5";
const trustIcon = "w-8 h-8 rounded-full bg-white border border-border-light inline-flex items-center justify-center text-brass";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-parchment pt-[88px] pb-24 px-8 max-[680px]:pt-14 max-[680px]:pb-[72px] max-[680px]:px-5"
    >
      <div
        data-anim="hero-bg"
        className="absolute inset-0 bg-[url('/assets/patterns/herringbone.svg')] bg-repeat opacity-[0.05] text-espresso pointer-events-none will-change-transform"
      />
      <div className="relative max-w-[1200px] mx-auto grid grid-cols-[1.05fr_1fr] gap-16 items-center max-[1100px]:grid-cols-1 max-[1100px]:gap-12">
        <div>
          <h1
            data-anim="hero-title"
            className="anim-fade-up font-display font-bold text-[68px] leading-[1.02] tracking-[-0.025em] text-espresso m-0 mb-6 text-balance max-[1100px]:text-[52px] max-[680px]:text-[40px]"
          >
            Floors that last.{" "}
            <em className="italic font-medium text-brass">Chosen with care.</em>
          </h1>
          <p
            data-anim="hero-sub"
            className="anim-fade-up text-xl leading-[1.55] text-coffee m-0 mb-9 max-w-[520px] max-[680px]:text-[17px]"
          >
            Carpets, wood, LVT and vinyl — measured and quoted by our own team.
            Come and walk on them in our Newtownards showroom.
          </p>
          <div
            data-anim="hero-ctas"
            className="anim-fade-up flex gap-3.5 items-center flex-wrap"
          >
            <a className={buttonClasses("pill")} href="#showroom">
              <IconMapPin size={16} /> Visit the showroom
            </a>
            <a className={buttonClasses("outline")} href="#ranges">
              See our ranges <IconArrowRight size={16} />
            </a>
          </div>
          <div
            data-anim="hero-trust"
            className="anim-fade-up flex gap-8 mt-11 pt-8 border-t border-border-light flex-wrap"
          >
            <div className={trustItem}>
              <span className={trustIcon}>
                <IconMapPin size={16} />
              </span>
              <span>
                24-26 Regent St,{" "}
                <strong className="text-ink font-bold">Newtownards</strong>
              </span>
            </div>
            <div className={trustItem}>
              <span className={trustIcon}>
                <IconClock size={16} />
              </span>
              <span>
                Open <strong className="text-ink font-bold">Mon–Sat</strong>,
                9–5:30
              </span>
            </div>
            <div className={trustItem}>
              <span className={trustIcon}>
                <IconRuler size={16} />
              </span>
              <span>
                <strong className="text-ink font-bold">Free</strong> home
                measure
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            data-anim="hero-img"
            className="anim-scale-in aspect-[4/3] rounded-3xl overflow-hidden shadow-medium relative bg-parchment-deep origin-center"
          >
            <div className="absolute top-5 left-5 z-10 bg-espresso/80 backdrop-blur-md text-parchment py-2 px-3.5 rounded-full text-[11px] font-semibold leading-none uppercase tracking-[0.1em] inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brass" />
              Our Newtownards showroom
            </div>
            <img
              src="/assets/flooring-hero.jpg"
              alt="Regent Flooring storefront on Regent Street, Newtownards"
              className="w-full h-full object-cover object-center will-change-transform"
            />
          </div>
          <div
            data-anim="hero-swatches"
            className="anim-fade-up absolute -left-10 bottom-10 flex flex-col gap-3 bg-white p-5 rounded-2xl border border-border-light shadow-medium max-w-[220px] max-[1100px]:static max-[1100px]:-mt-6 max-[1100px]:max-w-none"
          >
            <h4 className="text-[11px] font-semibold leading-none uppercase tracking-[0.12em] text-smoke m-0">
              Today&apos;s samples
            </h4>
            <div className="flex gap-2">
              {SWATCHES.map((s) => (
                <div
                  key={s.title}
                  title={s.title}
                  className="w-9 h-9 rounded-md border border-border-light bg-cover bg-center transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-medium"
                  style={{ backgroundImage: `url('${s.url}')` }}
                />
              ))}
            </div>
            <div className="text-xs leading-[1.3] text-coffee font-medium">
              <strong className="text-ink font-bold block text-[13px] font-display">
                Take samples home
              </strong>
              Free of charge, ordered over the counter.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
