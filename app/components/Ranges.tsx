import { IconArrowRight } from "./Icons";

const RANGES = [
  {
    key: "carpets",
    cat: "Wool twist pile",
    name: "The Ardmore Collection",
    blurb:
      "A dense, 50-ounce wool twist woven in Yorkshire. Warm underfoot, hard-wearing, quiet.",
    specs: ["80/20 wool", "4m & 5m", "10yr guarantee"],
    img: "/assets/temp-flooring/carpet-selection.jpg",
    meta: "Bestseller",
  },
  {
    key: "wood",
    cat: "Engineered oak",
    name: "Millfield Oak",
    blurb:
      "Real oak planks with a brushed matt lacquer. Solid on the top, quiet to live with.",
    specs: ["14mm", "3mm wear layer", "20yr domestic"],
    img: "/assets/temp-flooring/oak-floor.png",
    meta: "New in",
  },
  {
    key: "lvt",
    cat: "Luxury vinyl tile",
    name: "Ards Stone LVT",
    blurb:
      "Waterproof planks with stone and plank looks. Warm on a cold morning in the kitchen.",
    specs: ["Waterproof", "Click-fit", "25yr domestic"],
    img: "/assets/temp-flooring/lvt-flooring.jpg",
    meta: "Warm underfoot",
  },
  {
    key: "herringbone",
    cat: "Parquet",
    name: "Herringbone Parquet",
    blurb:
      "Oak parquet laid by our own fitters. A proper feature for a hall or a living room.",
    specs: ["Oak 600×120", "Brushed matt", "Fitted by us"],
    img: "/assets/temp-flooring/solid-wood.jpg",
    meta: "Fitted by our team",
  },
  {
    key: "laminate",
    cat: "Laminate",
    name: "Downshire Laminate",
    blurb:
      "Realistic wood finishes at a sensible price. Clicks together, takes a spill, lasts.",
    specs: ["8mm", "AC4 commercial", "15yr domestic"],
    img: "/assets/temp-flooring/wood-flooring.jpg",
    meta: "Hard-wearing",
  },
  {
    key: "contract",
    cat: "Contract carpet",
    name: "Regent Contract",
    blurb:
      "For offices, pubs and hallways. Heavy-duty loop pile in eight sensible colours.",
    specs: ["Loop pile", "4m broadloom", "Contract rated"],
    img: "/assets/temp-flooring/vinyl-flooring.jpg",
    meta: "Commercial",
  },
];

export default function Ranges() {
  return (
    <section className="section" id="ranges">
      <div className="section-inner">
        <div className="section-header">
          <div
            className="section-eyebrow anim-fade-up"
            data-anim="section-eyebrow"
          >
            Our ranges
          </div>
          <h2 className="anim-fade-up" data-anim="section-title">
            A floor for every room in the house
          </h2>
          <p className="section-lede anim-fade-up" data-anim="section-lede">
            Over 400 samples in the Newtownards showroom, with expert advice and
            no hard sell. Take samples home, live with them, and let us know.
          </p>
        </div>
        <div className="ranges-grid" data-anim="ranges-grid">
          {RANGES.map((r) => (
            <article
              key={r.key}
              className="range-card anim-fade-up"
              data-anim="range-card"
            >
              <div
                className="range-card-img"
                style={{ backgroundImage: `url(${r.img})` }}
              >
                <div className="range-card-meta">{r.meta}</div>
              </div>
              <div className="range-card-body">
                <div className="range-card-cat">{r.cat}</div>
                <h3>{r.name}</h3>
                <p>{r.blurb}</p>
                <div className="range-card-foot">
                  <div className="range-card-specs">
                    {r.specs.map((s, i) => (
                      <span key={i}>
                        {i > 0 && <span aria-hidden>·</span>}
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="range-card-arrow">
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
