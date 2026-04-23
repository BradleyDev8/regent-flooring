import { IconArrowRight } from "./Icons";

const RANGES = [
  {
    key: "carpets",
    cat: "Wool twist pile",
    name: "Carpets",
    blurb:
      "A dense, 50-ounce wool twist woven in Yorkshire. Warm underfoot, hard-wearing, quiet.",
    specs: ["80/20 wool", "4m & 5m", "10yr guarantee"],
    img: "/assets/temp-flooring/carpet-selection.jpg",
    meta: "Bestseller",
  },
  {
    key: "wood",
    cat: "Engineered oak",
    name: "Wooden Floor",
    blurb:
      "Real oak planks with a brushed matt lacquer. Solid on the top, quiet to live with.",
    specs: ["14mm", "3mm wear layer", "20yr domestic"],
    img: "/assets/temp-flooring/oak-floor.png",
    meta: "New in",
  },
  {
    key: "lvt",
    cat: "Luxury vinyl tile",
    name: "LVT",
    blurb:
      "Waterproof planks with stone and plank looks. Warm on a cold morning in the kitchen.",
    specs: ["Waterproof", "Click-fit", "25yr domestic"],
    img: "/assets/temp-flooring/lvt-flooring.jpg",
    meta: "Warm underfoot",
  },
  {
    key: "herringbone",
    cat: "Parquet",
    name: "Vinyl Flooring",
    blurb:
      "Oak parquet laid by our own fitters. A proper feature for a hall or a living room.",
    specs: ["Oak 600×120", "Brushed matt", "Fitted by us"],
    img: "/assets/temp-flooring/solid-wood.jpg",
    meta: "Fitted by our team",
  },
  {
    key: "laminate",
    cat: "Laminate",
    name: "Laminate Flooring",
    blurb:
      "Realistic wood finishes at a sensible price. Clicks together, takes a spill, lasts.",
    specs: ["8mm", "AC4 commercial", "15yr domestic"],
    img: "/assets/temp-flooring/wood-flooring.jpg",
    meta: "Hard-wearing",
  },
  {
    key: "contract",
    cat: "Contract carpet",
    name: "Commercial Flooring",
    blurb:
      "For offices, pubs and hallways. Heavy-duty loop pile in eight sensible colours.",
    specs: ["Loop pile", "4m broadloom", "Contract rated"],
    img: "/assets/temp-flooring/vinyl-flooring.jpg",
    meta: "Commercial",
  },
];

export default function Ranges() {
  return (
    <section
      id="ranges"
      className="py-24 px-8 max-[680px]:py-[72px] max-[680px]:px-5"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14 max-w-[720px] mx-auto">
          <div
            data-anim="section-eyebrow"
            className="anim-fade-up text-xs font-semibold leading-none uppercase tracking-[0.14em] text-brass mb-4"
          >
            Our ranges
          </div>
          <h2
            data-anim="section-title"
            className="anim-fade-up font-display font-bold text-5xl leading-[1.05] tracking-[-0.02em] m-0 mb-4 text-balance max-[680px]:text-[34px]"
          >
            A floor for every room in the house
          </h2>
          <p
            data-anim="section-lede"
            className="anim-fade-up text-lg leading-[1.55] text-coffee m-0 mx-auto"
          >
            Over 400 samples in the Newtownards showroom, with expert advice and
            no hard sell. Take samples home, live with them, and let us know.
          </p>
        </div>
        <div
          data-anim="ranges-grid"
          className="grid grid-cols-3 gap-6 max-[1100px]:grid-cols-2 max-[680px]:grid-cols-1"
        >
          {RANGES.map((r) => (
            <article
              key={r.key}
              data-anim="range-card"
              className="anim-fade-up group bg-white border border-border-light rounded-xl overflow-hidden shadow-subtle cursor-pointer transition-[box-shadow,border-color,transform] duration-[400ms] ease-[cubic-bezier(.2,.8,.2,1)] hover:shadow-medium hover:border-border-strong hover:-translate-y-1 flex flex-col"
            >
              <div
                className="aspect-[4/3] bg-cover bg-center border-b border-border-light relative overflow-hidden transition-[background-size] duration-[600ms] [background-size:100%] group-hover:[background-size:110%]"
                style={{ backgroundImage: `url(${r.img})` }}
              >
                <div className="absolute top-4 left-4 bg-parchment/90 backdrop-blur-[6px] text-coffee py-[5px] px-2.5 rounded-[4px] text-[11px] font-semibold leading-none uppercase tracking-[0.06em]">
                  {r.meta}
                </div>
              </div>
              <div className="px-7 pt-7 pb-[26px] flex flex-col gap-2 flex-1">
                <div className="text-[11px] font-semibold leading-none uppercase tracking-[0.12em] text-smoke mb-1">
                  {r.cat}
                </div>
                <h3 className="font-display font-semibold text-[26px] leading-[1.15] text-ink m-0 tracking-[-0.01em]">
                  {r.name}
                </h3>
                <p className="text-[15px] leading-[1.55] text-coffee m-0">
                  {r.blurb}
                </p>
                <div className="flex flex-col items-stretch gap-3 mt-3 pt-4 border-t border-border-light">
                  <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 text-xs leading-[1.2] text-smoke font-medium">
                    {r.specs.map((s, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 whitespace-nowrap"
                      >
                        {i > 0 && <span aria-hidden>·</span>}
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="text-brass text-[13px] font-semibold leading-none inline-flex items-center gap-1.5 whitespace-nowrap self-start transition-[gap] duration-200 group-hover:gap-2.5">
                    See it <IconArrowRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
