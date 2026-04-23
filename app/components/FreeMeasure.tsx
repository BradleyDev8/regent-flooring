"use client";

import { IconPhone, IconRuler } from "./Icons";

export default function FreeMeasure() {
  return (
    <section className="measure" id="measure">
      <div className="measure-inner">
        <div className="measure-card">
          <div className="measure-body">
            <div
              className="measure-eyebrow anim-fade-up"
              data-anim="measure-eyebrow"
            >
              <IconRuler size={13} /> Free home measure
            </div>
            <h2 className="anim-fade-up" data-anim="measure-title">
              Book your <em>free home measure</em>
            </h2>
            <p className="measure-lede anim-fade-up" data-anim="measure-lede">
              Our team can call out, measure your rooms, and help you choose
              the right flooring with confidence.
            </p>

            <form
              className="measure-form anim-fade-up"
              data-anim="measure-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="measure-field">
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label className="measure-field">
                <span>Phone</span>
                <input type="tel" name="phone" placeholder="07…" required />
              </label>
              <label className="measure-field measure-field-wide">
                <span>Preferred day</span>
                <input type="text" name="day" placeholder="e.g. Tuesday AM" />
              </label>
              <div className="measure-actions">
                <button type="submit" className="btn btn-pill">
                  <IconRuler size={16} /> Book my free measure
                </button>
                <a className="btn btn-outline" href="tel:02891811234">
                  <IconPhone size={16} /> Call us instead
                </a>
              </div>
            </form>

            <div
              className="measure-trust anim-fade-up"
              data-anim="measure-trust"
            >
              Free home measure <span className="dot">•</span> Local team{" "}
              <span className="dot">•</span> Fast turnaround
            </div>
          </div>

          <div className="measure-media">
            <img
              className="measure-character anim-scale-in"
              data-anim="measure-character"
              src="/assets/free-measure.png"
              alt="Friendly Regent Flooring measurer with tape"
              width={360}
              height={480}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
