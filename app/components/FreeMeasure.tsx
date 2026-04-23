"use client";

import Image from "next/image";
import { IconPhone, IconRuler } from "./Icons";
import { buttonClasses } from "./Button";

const inputClass =
  "text-[15px] leading-[1.3] text-ink bg-snow border border-border-light rounded-[10px] py-[11px] px-[13px] outline-none w-full min-w-0 transition-[border-color,box-shadow,background-color] duration-[180ms] hover:border-border-strong focus:border-brass focus:bg-white focus:shadow-[0_0_0_3px_rgba(254,127,2,0.18)]";
const labelClass =
  "text-[11px] font-semibold leading-none uppercase tracking-[0.1em] text-smoke";
const btnClass = `${buttonClasses("pill")} py-3 px-[22px] min-h-[46px] text-[15px] max-[520px]:w-full`;
const outlineClass = `${buttonClasses("outline")} py-3 px-[22px] min-h-[46px] text-[15px] max-[520px]:w-full`;

export default function FreeMeasure() {
  return (
    <section
      id="measure"
      className="relative bg-parchment py-14 px-8 max-[680px]:py-10 max-[680px]:px-5"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="relative grid grid-cols-[1fr_minmax(0,380px)] items-stretch bg-white border border-border-light rounded-3xl shadow-medium overflow-hidden max-[900px]:grid-cols-1">
          <div className="p-10 flex flex-col gap-3.5 min-w-0 max-[900px]:p-8 max-[520px]:p-6">
            <div
              data-anim="measure-eyebrow"
              className="anim-fade-up self-start inline-flex items-center gap-2 text-[11px] font-semibold leading-none uppercase tracking-[0.14em] text-brass bg-parchment-deep py-[7px] px-3 rounded-full"
            >
              <IconRuler size={13} /> Free home measure
            </div>
            <h2
              data-anim="measure-title"
              className="anim-fade-up font-display font-bold text-[34px] leading-[1.08] tracking-[-0.02em] text-espresso m-0 text-balance max-[900px]:text-[30px] max-[520px]:text-[26px]"
            >
              Book your{" "}
              <em className="italic font-medium text-brass">
                free home measure
              </em>
            </h2>
            <p
              data-anim="measure-lede"
              className="anim-fade-up text-base leading-[1.55] text-coffee m-0 max-w-[480px]"
            >
              Our team can call out, measure your rooms, and help you choose the
              right flooring with confidence.
            </p>

            <form
              data-anim="measure-form"
              className="anim-fade-up grid grid-cols-2 gap-3 mt-2 max-[520px]:grid-cols-1"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="flex flex-col gap-1.5 min-w-0">
                <span className={labelClass}>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className={inputClass}
                />
              </label>
              <label className="flex flex-col gap-1.5 min-w-0">
                <span className={labelClass}>Phone</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="07…"
                  required
                  className={inputClass}
                />
              </label>
              <label className="flex flex-col gap-1.5 min-w-0 col-span-2 max-[520px]:col-span-1">
                <span className={labelClass}>Preferred day</span>
                <input
                  type="text"
                  name="day"
                  placeholder="e.g. Tuesday AM"
                  className={inputClass}
                />
              </label>
              <div className="col-span-2 flex flex-wrap gap-2.5 mt-1 max-[520px]:col-span-1 max-[520px]:flex-col max-[520px]:items-stretch">
                <button type="submit" className={btnClass}>
                  <IconRuler size={16} /> Book my free measure
                </button>
                <a href="tel:02891811234" className={outlineClass}>
                  <IconPhone size={16} /> Call us instead
                </a>
              </div>
            </form>

            <div
              data-anim="measure-trust"
              className="anim-fade-up text-[13px] leading-[1.4] text-smoke font-medium mt-1.5"
            >
              Free home measure{" "}
              <span className="text-brass mx-1">•</span> Local team{" "}
              <span className="text-brass mx-1">•</span> Fast turnaround
            </div>
          </div>

          <div className="relative flex items-end justify-end max-[900px]:justify-center max-[900px]:order-2">
            <Image
              data-anim="measure-character"
              className="anim-scale-in block w-full max-w-[380px] h-auto object-contain drop-shadow-[0_20px_28px_rgba(34,28,22,0.2)] relative z-10 max-[900px]:w-[240px] max-[520px]:w-[200px]"
              src="/assets/free-measure.png"
              alt="Friendly Regent Flooring measurer with tape"
              width={1086}
              height={1448}
              sizes="(max-width: 520px) 200px, (max-width: 900px) 240px, 380px"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
