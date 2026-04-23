import { IconArrowRight, IconClock, IconMapPin, IconRuler } from "./Icons";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" data-anim="hero-bg" />
      <div className="hero-inner">
        <div>
          {/* <div className="hero-eyebrow anim-fade-up" data-anim="hero-eyebrow">
            Family-run in Newtownards since 1984
          </div> */}
          <h1 className="anim-fade-up" data-anim="hero-title">
            Floors that last. <em>Chosen with care.</em>
          </h1>
          <p className="hero-sub anim-fade-up" data-anim="hero-sub">
            Carpets, wood, LVT and vinyl — measured and quoted by our own team.
            Come and walk on them in our Newtownards showroom.
          </p>
          <div className="hero-ctas anim-fade-up" data-anim="hero-ctas">
            <a className="btn btn-pill" href="#showroom">
              <IconMapPin size={16} /> Visit the showroom
            </a>
            <a className="btn btn-outline" href="#ranges">
              See our ranges <IconArrowRight size={16} />
            </a>
          </div>
          <div className="hero-trust anim-fade-up" data-anim="hero-trust">
            <div className="hero-trust-item">
              <span className="icon-wrap">
                <IconMapPin size={16} />
              </span>
              <span>
                24-26 Regent St, <strong>Newtownards</strong>
              </span>
            </div>
            <div className="hero-trust-item">
              <span className="icon-wrap">
                <IconClock size={16} />
              </span>
              <span>
                Open <strong>Mon–Sat</strong>, 9–5:30
              </span>
            </div>
            <div className="hero-trust-item">
              <span className="icon-wrap">
                <IconRuler size={16} />
              </span>
              <span>
                <strong>Free</strong> home measure
              </span>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <div className="hero-img anim-scale-in" data-anim="hero-img">
            <div className="hero-img-tag">Our Newtownards showroom</div>
            <img
              src="/assets/flooring-hero.jpg"
              alt="Regent Flooring storefront on Regent Street, Newtownards"
            />
          </div>
          <div
            className="hero-swatch-stack anim-fade-up"
            data-anim="hero-swatches"
          >
            <h4>Today&apos;s samples</h4>
            <div className="hero-swatch-row">
              <div
                className="hero-swatch"
                style={{
                  backgroundImage:
                    "url('/assets/materials/carpet-wool-beige.svg')",
                }}
                title="Wool beige"
              />
              <div
                className="hero-swatch"
                style={{
                  backgroundImage: "url('/assets/temp-flooring/oak-floor.png')",
                }}
                title="Oak"
              />
              <div
                className="hero-swatch"
                style={{
                  backgroundImage:
                    "url('/assets/temp-flooring/solid-wood.jpg')",
                }}
                title="Herringbone"
              />
              <div
                className="hero-swatch"
                style={{
                  backgroundImage:
                    "url('/assets/temp-flooring/lvt-flooring.jpg')",
                }}
                title="LVT stone"
              />
            </div>
            <div className="hero-swatch-cap">
              <strong>Take samples home</strong>
              Free of charge, ordered over the counter.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
