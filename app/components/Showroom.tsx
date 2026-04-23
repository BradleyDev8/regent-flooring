import { Fragment } from "react";
import { IconArrowRight, IconClock, IconMapPin, IconPhone } from "./Icons";

const HOURS = [
  { d: "Monday",    h: "9:00 – 5:30", i: 1 },
  { d: "Tuesday",   h: "9:00 – 5:30", i: 2 },
  { d: "Wednesday", h: "9:00 – 5:30", i: 3 },
  { d: "Thursday",  h: "9:00 – 5:30", i: 4 },
  { d: "Friday",    h: "9:00 – 5:30", i: 5 },
  { d: "Saturday",  h: "9:00 – 4:30", i: 6 },
  { d: "Sunday",    h: "Closed",      i: 0 },
];

export default function Showroom({ today }: { today: number }) {
  return (
    <section className="showroom" id="showroom">
      <div className="showroom-bg" data-anim="showroom-bg" />
      <div className="showroom-inner">
        <div>
          <div className="section-eyebrow anim-fade-up" data-anim="showroom-eyebrow">Visit us</div>
          <h2 className="anim-fade-up" data-anim="showroom-title">Come and walk on it.</h2>
          <p className="showroom-lede anim-fade-up" data-anim="showroom-lede">
            Over 400 samples, fanned out across a proper showroom floor —
            not a photo on a screen. Pop in, bring the room measurements if you
            have them, and one of our team will talk you through it. No appointment needed.
          </p>

          <div className="showroom-details anim-fade-up" data-anim="showroom-details">
            <div className="showroom-detail-icon"><IconMapPin size={20} /></div>
            <div className="showroom-detail-text">
              <div className="showroom-detail-label">Showroom</div>
              <div className="showroom-detail-value">24-26 Regent St, Newtownards</div>
              <div className="showroom-detail-sub">BT23 4LJ · Free parking nearby</div>
            </div>

            <div className="showroom-detail-icon"><IconClock size={20} /></div>
            <div className="showroom-detail-text">
              <div className="showroom-detail-label">Opening hours</div>
              <div className="showroom-detail-value">Mon–Fri 9:00 – 5:30 · Sat 9:00 – 4:30</div>
              <div className="showroom-detail-sub">Sunday closed</div>
            </div>

            <div className="showroom-detail-icon"><IconPhone size={20} /></div>
            <div className="showroom-detail-text">
              <div className="showroom-detail-label">Give us a ring</div>
              <div className="showroom-detail-value"><a href="tel:02891812345">028 9181 2345</a></div>
              <div className="showroom-detail-sub">
                <a href="mailto:hello@regentflooring.co.uk" style={{ color: "var(--text-slate)" }}>
                  hello@regentflooring.co.uk
                </a>
              </div>
            </div>
          </div>

          <div className="showroom-ctas anim-fade-up" data-anim="showroom-ctas">
            <a
              className="btn btn-pill"
              href="https://maps.google.com/?q=24-26+Regent+St+Newtownards+BT23+4LJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconMapPin size={16} /> Get directions <IconArrowRight size={14} />
            </a>
            <a href="tel:02891812345" className="btn btn-outline">
              <IconPhone size={16} /> Call the showroom
            </a>
          </div>
        </div>

        <div className="showroom-map anim-scale-in" data-anim="showroom-map" role="img" aria-label="Map of Newtownards showroom location">
          <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
            <defs>
              <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C5B594" strokeWidth="0.5" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="400" height="500" fill="url(#mapgrid)" />
            <path d="M -20 380 Q 100 360 180 400 T 420 420 L 420 520 L -20 520 Z" fill="#A8BDB0" opacity="0.5" />
            <path d="M 0 200 L 400 230" stroke="#F7F2EA" strokeWidth="14" />
            <path d="M 0 200 L 400 230" stroke="#E4DCCB" strokeWidth="1" />
            <path d="M 180 0 L 220 500" stroke="#F7F2EA" strokeWidth="10" />
            <path d="M 180 0 L 220 500" stroke="#E4DCCB" strokeWidth="1" />
            <path d="M 60 80 L 380 120" stroke="#F7F2EA" strokeWidth="6" opacity="0.8" />
            <path d="M 40 300 L 380 340" stroke="#F7F2EA" strokeWidth="6" opacity="0.8" />
            <rect x="30" y="90" width="90" height="80" fill="#E8DFC9" opacity="0.6" rx="2" />
            <rect x="240" y="60" width="110" height="100" fill="#E8DFC9" opacity="0.6" rx="2" />
            <rect x="50" y="240" width="100" height="50" fill="#E8DFC9" opacity="0.6" rx="2" />
            <rect x="270" y="260" width="90" height="60" fill="#E8DFC9" opacity="0.6" rx="2" />
            <text x="200" y="210" fontFamily="Inter, sans-serif" fontSize="11" fill="#6B5F52" fontWeight="600" letterSpacing="0.1em">REGENT STREET</text>
            <text x="230" y="140" fontFamily="Inter, sans-serif" fontSize="10" fill="#6B5F52" fontWeight="500" transform="rotate(3 230 140)">High Street</text>
          </svg>

          <div className="showroom-map-badge">
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--brass)", display: "inline-block" }}></span>
            Newtownards, Co. Down
          </div>

          <div className="showroom-map-pin" data-anim="map-pin">
            <div className="pin-pulse" data-anim="pin-pulse" />
            <div className="pin-dot" />
            <div className="pin-card">Regent Flooring</div>
          </div>

          <div className="showroom-map-inner">
            <div className="showroom-map-hours">
              {HOURS.map((row) => (
                <Fragment key={row.d}>
                  <span className={`h-label ${row.i === today ? "h-today" : ""}`}>
                    {row.d}
                    {row.i === today ? " · today" : ""}
                  </span>
                  <span className={`h-value ${row.i === today ? "h-today" : ""}`}>{row.h}</span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
