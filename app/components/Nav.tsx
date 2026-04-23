"use client";

import { useEffect, useState } from "react";
import { buttonClasses } from "./Button";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const LINKS = [
  { id: "ranges", label: "Ranges" },
  { id: "spotlight", label: "Ardmore" },
  { id: "showroom", label: "Showroom" },
];

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
      <div className="bg-espresso text-parchment text-center text-xs font-semibold leading-none uppercase tracking-[0.08em] py-2.5 px-4 overflow-hidden">
        Newtownards showroom open{" "}
        <strong className="text-parchment font-bold">Mon–Sat</strong>
        <span className="text-brass mx-2.5">·</span>
        Over 400 samples in store
        <span className="text-brass mx-2.5">·</span>
        Free home measure across Co. Down
      </div>
      <div
        data-anim="nav"
        className={`sticky top-0 z-50 transition-[backdrop-filter,background-color,box-shadow,border-color] duration-200 border-b ${
          scrolled
            ? "bg-parchment/80 backdrop-blur-md shadow-subtle border-border-light"
            : "border-transparent"
        }`}
      >
        <nav className="flex items-center gap-7 py-2.5 px-8 h-[76px] max-w-[1400px] mx-auto max-[680px]:px-5 max-[680px]:gap-4 max-[680px]:h-16">
          <a
            className="flex items-center gap-2.5 cursor-pointer"
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src="/assets/regent-logo.png"
              alt="Regent Flooring"
              className="w-[220px] h-[60px] object-cover object-center"
            />
          </a>
          <div className="flex gap-[26px] ml-3 max-[680px]:hidden">
            {LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(id);
                }}
                className="font-semibold text-base leading-[1.35] text-coffee cursor-pointer py-1 border-b-2 border-transparent hover:text-black hover:border-brass transition-[border-color,color] duration-200"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-[18px]">
            <button
              className={buttonClasses("pill", "sm")}
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
