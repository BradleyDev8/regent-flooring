"use client";

import { useEffect, useState } from "react";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="promo">
        Newtownards showroom open{" "}
        <strong style={{ color: "var(--parchment)", fontWeight: 700 }}>
          Mon–Sat
        </strong>
        <span className="dot">·</span>
        Over 400 samples in store
        <span className="dot">·</span>
        Free home measure across Co. Down
      </div>
      <div className={`nav-wrap ${scrolled ? "scrolled" : ""}`} data-anim="nav">
        <nav className="nav">
          <a
            className="nav-logo"
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src="/assets/regent-logo.png" alt="Regent Flooring" />
          </a>
          <div className="nav-links">
            <a
              onClick={(e) => {
                e.preventDefault();
                scrollTo("ranges");
              }}
              href="#ranges"
            >
              Ranges
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                scrollTo("spotlight");
              }}
              href="#spotlight"
            >
              Ardmore
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                scrollTo("showroom");
              }}
              href="#showroom"
            >
              Showroom
            </a>
          </div>
          <div className="nav-right">
            <button
              className="btn btn-pill btn-sm"
              onClick={() => scrollTo("showroom")}
            >
              Contact us
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
