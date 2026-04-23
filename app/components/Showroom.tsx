import { Fragment } from "react";
import { IconArrowRight, IconClock, IconMapPin, IconPhone } from "./Icons";
import { buttonClasses } from "./Button";

const HOURS = [
  { d: "Monday",    h: "9:00 – 5:30", i: 1 },
  { d: "Tuesday",   h: "9:00 – 5:30", i: 2 },
  { d: "Wednesday", h: "9:00 – 5:30", i: 3 },
  { d: "Thursday",  h: "9:00 – 5:30", i: 4 },
  { d: "Friday",    h: "9:00 – 5:30", i: 5 },
  { d: "Saturday",  h: "9:00 – 4:30", i: 6 },
  { d: "Sunday",    h: "Closed",      i: 0 },
];

const detailIcon =
  "w-11 h-11 rounded-[10px] bg-parchment-deep text-brass inline-flex items-center justify-center shrink-0";
const detailLabel =
  "text-[11px] font-semibold leading-none uppercase tracking-[0.12em] text-smoke";
const detailValue = "text-base font-semibold leading-[1.4] text-ink";
const detailSub = "text-sm leading-[1.4] text-smoke mt-0.5";

export default function Showroom({ today }: { today: number }) {
  return (
    <section
      id="showroom"
      className="relative overflow-hidden bg-parchment-deep py-28 px-8 max-[680px]:py-[72px] max-[680px]:px-5"
    >
      <div
        data-anim="showroom-bg"
        className="absolute inset-0 bg-[url('/assets/patterns/herringbone.svg')] bg-repeat opacity-[0.04] text-espresso pointer-events-none will-change-transform"
      />
      <div className="relative max-w-[1200px] mx-auto grid grid-cols-[1.1fr_1fr] gap-16 items-center max-[1100px]:grid-cols-1 max-[1100px]:gap-12">
        <div>
          <div
            data-anim="showroom-eyebrow"
            className="anim-fade-up text-xs font-semibold leading-none uppercase tracking-[0.14em] text-brass mb-4"
          >
            Visit us
          </div>
          <h2
            data-anim="showroom-title"
            className="anim-fade-up font-display font-bold text-[56px] leading-[1.02] tracking-[-0.025em] text-espresso m-0 mb-5 text-balance max-[1100px]:text-[42px] max-[680px]:text-[34px]"
          >
            Come and walk on it.
          </h2>
          <p
            data-anim="showroom-lede"
            className="anim-fade-up text-[19px] leading-[1.6] text-coffee m-0 mb-10 max-w-[540px]"
          >
            Over 400 samples, fanned out across a proper showroom floor — not a
            photo on a screen. Pop in, bring the room measurements if you have
            them, and one of our team will talk you through it. No appointment
            needed.
          </p>

          <div
            data-anim="showroom-details"
            className="anim-fade-up grid grid-cols-[auto_1fr] gap-y-5 gap-x-6 mb-9 p-7 bg-white border border-border-light rounded-2xl shadow-subtle"
          >
            <div className={detailIcon}>
              <IconMapPin size={20} />
            </div>
            <div className="flex flex-col gap-0.5">
              <div className={detailLabel}>Showroom</div>
              <div className={detailValue}>24-26 Regent St, Newtownards</div>
              <div className={detailSub}>BT23 4LJ · Free parking nearby</div>
            </div>

            <div className={detailIcon}>
              <IconClock size={20} />
            </div>
            <div className="flex flex-col gap-0.5">
              <div className={detailLabel}>Opening hours</div>
              <div className={detailValue}>
                Mon–Fri 9:00 – 5:30 · Sat 9:00 – 4:30
              </div>
              <div className={detailSub}>Sunday closed</div>
            </div>

            <div className={detailIcon}>
              <IconPhone size={20} />
            </div>
            <div className="flex flex-col gap-0.5">
              <div className={detailLabel}>Give us a ring</div>
              <div className={detailValue}>
                <a href="tel:02891812345" className="text-ink hover:text-brass">
                  028 9181 2345
                </a>
              </div>
              <div className={detailSub}>
                <a
                  href="mailto:hello@regentflooring.co.uk"
                  className="text-smoke hover:text-brass"
                >
                  hello@regentflooring.co.uk
                </a>
              </div>
            </div>
          </div>

          <div
            data-anim="showroom-ctas"
            className="anim-fade-up flex gap-3.5 items-center flex-wrap"
          >
            <a
              className={buttonClasses("pill")}
              href="https://maps.google.com/?q=24-26+Regent+St+Newtownards+BT23+4LJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconMapPin size={16} /> Get directions{" "}
              <IconArrowRight size={14} />
            </a>
            <a href="tel:02891812345" className={buttonClasses("outline")}>
              <IconPhone size={16} /> Call the showroom
            </a>
          </div>
        </div>

        <div
          data-anim="showroom-map"
          className="anim-scale-in aspect-[4/5] rounded-[20px] overflow-hidden relative border border-border-light shadow-medium bg-[linear-gradient(180deg,#e8dfc9_0%,#d4c7a8_100%)]"
          role="img"
          aria-label="Map of Newtownards showroom location"
        >
          <svg
            viewBox="0 0 400 500"
            preserveAspectRatio="xMidYMid slice"
            width="100%"
            height="100%"
            className="absolute inset-0"
          >
            <defs>
              <pattern
                id="mapgrid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#C5B594"
                  strokeWidth="0.5"
                  opacity="0.5"
                />
              </pattern>
            </defs>
            <rect width="400" height="500" fill="url(#mapgrid)" />
            <path
              d="M -20 380 Q 100 360 180 400 T 420 420 L 420 520 L -20 520 Z"
              fill="#A8BDB0"
              opacity="0.5"
            />
            <path d="M 0 200 L 400 230" stroke="#F7F2EA" strokeWidth="14" />
            <path d="M 0 200 L 400 230" stroke="#E4DCCB" strokeWidth="1" />
            <path d="M 180 0 L 220 500" stroke="#F7F2EA" strokeWidth="10" />
            <path d="M 180 0 L 220 500" stroke="#E4DCCB" strokeWidth="1" />
            <path
              d="M 60 80 L 380 120"
              stroke="#F7F2EA"
              strokeWidth="6"
              opacity="0.8"
            />
            <path
              d="M 40 300 L 380 340"
              stroke="#F7F2EA"
              strokeWidth="6"
              opacity="0.8"
            />
            <rect
              x="30"
              y="90"
              width="90"
              height="80"
              fill="#E8DFC9"
              opacity="0.6"
              rx="2"
            />
            <rect
              x="240"
              y="60"
              width="110"
              height="100"
              fill="#E8DFC9"
              opacity="0.6"
              rx="2"
            />
            <rect
              x="50"
              y="240"
              width="100"
              height="50"
              fill="#E8DFC9"
              opacity="0.6"
              rx="2"
            />
            <rect
              x="270"
              y="260"
              width="90"
              height="60"
              fill="#E8DFC9"
              opacity="0.6"
              rx="2"
            />
            <text
              x="200"
              y="210"
              fontFamily="Inter, sans-serif"
              fontSize="11"
              fill="#6B5F52"
              fontWeight="600"
              letterSpacing="0.1em"
            >
              REGENT STREET
            </text>
            <text
              x="230"
              y="140"
              fontFamily="Inter, sans-serif"
              fontSize="10"
              fill="#6B5F52"
              fontWeight="500"
              transform="rotate(3 230 140)"
            >
              High Street
            </text>
          </svg>

          <div className="absolute top-6 right-6 bg-parchment/90 backdrop-blur-[6px] text-coffee py-2 px-3.5 rounded-full text-[11px] font-semibold leading-none uppercase tracking-[0.1em] inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brass inline-block" />
            Newtownards, Co. Down
          </div>

          <div
            data-anim="map-pin"
            className="absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center gap-1.5"
          >
            <div
              data-anim="pin-pulse"
              className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-brass opacity-50 pointer-events-none"
            />
            <div className="w-5 h-5 rounded-full bg-brass shadow-[0_0_0_6px_rgba(254,127,2,0.2),0_0_0_12px_rgba(254,127,2,0.08)]" />
            <div className="relative mt-2 bg-espresso text-parchment py-2.5 px-3.5 rounded-lg text-[13px] font-semibold leading-[1.2] whitespace-nowrap shadow-medium before:content-[''] before:absolute before:-top-[5px] before:left-1/2 before:-translate-x-1/2 before:rotate-45 before:w-2.5 before:h-2.5 before:bg-espresso">
              Regent Flooring
            </div>
          </div>

          <div className="absolute inset-0 flex flex-col justify-end p-7">
            <div className="bg-espresso/90 backdrop-blur-md text-parchment py-5 px-[22px] rounded-xl relative grid grid-cols-[auto_1fr] gap-y-2 gap-x-5 text-[13px] font-medium leading-[1.4]">
              {HOURS.map((row) => {
                const isToday = row.i === today;
                return (
                  <Fragment key={row.d}>
                    <span
                      className={`whitespace-nowrap ${isToday ? "text-brass" : "text-dust"}`}
                    >
                      {row.d}
                      {isToday ? " · today" : ""}
                    </span>
                    <span
                      className={`whitespace-nowrap text-right font-semibold ${isToday ? "text-brass" : "text-parchment"}`}
                    >
                      {row.h}
                    </span>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
