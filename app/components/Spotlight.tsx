import { IconArrowRight } from "./Icons";

export default function Spotlight() {
  return (
    <section className="spotlight" id="spotlight">
      <div className="spotlight-glow" data-anim="spotlight-glow" />
      <div className="spotlight-inner">
        <div
          className="spotlight-img-frame anim-scale-in"
          data-anim="spotlight-img"
        >
          <img
            src="/assets/temp-flooring/collection-temp.jpg"
            alt="Ardmore wool carpet detail — placeholder"
          />
          <div className="spotlight-img-tag">Ardmore · Oatmeal</div>
        </div>
        <div>
          <div
            className="section-eyebrow anim-fade-up"
            data-anim="spotlight-eyebrow"
          >
            Range spotlight
          </div>
          <h2 className="anim-fade-up" data-anim="spotlight-title">
            The <em>Ardmore</em> Collection
          </h2>
          <p className="spotlight-lede anim-fade-up" data-anim="spotlight-lede">
            A dense, 50-ounce twist-pile wool carpet woven in Yorkshire.
            Hard-wearing, warm underfoot, and made to take the knocks of a busy
            home — without losing the soft finish you&apos;d want in a bedroom.
          </p>
          <div
            className="spotlight-specs anim-fade-up"
            data-anim="spotlight-specs"
          >
            <div className="spotlight-spec">
              <div className="spotlight-spec-label">Pile</div>
              <div className="spotlight-spec-value">80% wool / 20% nylon</div>
            </div>
            <div className="spotlight-spec">
              <div className="spotlight-spec-label">Weight</div>
              <div className="spotlight-spec-value">50oz twist pile</div>
            </div>
            <div className="spotlight-spec">
              <div className="spotlight-spec-label">Width</div>
              <div className="spotlight-spec-value">4m &amp; 5m rolls</div>
            </div>
            <div className="spotlight-spec">
              <div className="spotlight-spec-label">Guarantee</div>
              <div className="spotlight-spec-value">10 years, domestic</div>
            </div>
          </div>
          <div className="hero-ctas anim-fade-up" data-anim="spotlight-ctas">
            <a className="btn btn-pill" href="#showroom">
              See it in the showroom <IconArrowRight size={16} />
            </a>
            <button className="btn btn-outline-light" type="button">
              Request a sample
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
