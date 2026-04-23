"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SiteAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const heroTL = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTL
        .to('[data-anim="hero-eyebrow"]', { opacity: 1, y: 0, duration: 0.6 })
        .to('[data-anim="hero-title"]', { opacity: 1, y: 0, duration: 0.9 }, "-=0.35")
        .to('[data-anim="hero-sub"]', { opacity: 1, y: 0, duration: 0.7 }, "-=0.55")
        .to('[data-anim="hero-ctas"]', { opacity: 1, y: 0, duration: 0.6 }, "-=0.45")
        .to('[data-anim="hero-trust"]', { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to(
          '[data-anim="hero-img"]',
          { opacity: 1, scale: 1, duration: 1.1, ease: "power2.out" },
          "<-0.85"
        )
        .to('[data-anim="hero-swatches"]', { opacity: 1, y: 0, duration: 0.7 }, "-=0.35");

      gsap.to(".hero-bg", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-img img", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const sectionReveal = (selector: string, trigger: string, stagger = 0.08) => {
        gsap.to(selector, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger,
          scrollTrigger: { trigger, start: "top 80%", once: true },
        });
      };

      sectionReveal(
        '[data-anim="measure-eyebrow"], [data-anim="measure-title"], [data-anim="measure-lede"], [data-anim="measure-form"], [data-anim="measure-trust"]',
        ".measure",
        0.1
      );

      gsap.to('[data-anim="measure-character"]', {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".measure", start: "top 80%", once: true },
      });

      sectionReveal(
        '#ranges [data-anim="section-eyebrow"], #ranges [data-anim="section-title"], #ranges [data-anim="section-lede"]',
        "#ranges .section-header"
      );

      gsap.to('[data-anim="range-card"]', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".ranges-grid", start: "top 82%", once: true },
      });

      gsap.to('[data-anim="spotlight-img"]', {
        opacity: 1,
        scale: 1,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".spotlight", start: "top 75%", once: true },
      });

      sectionReveal(
        '[data-anim="spotlight-eyebrow"], [data-anim="spotlight-title"], [data-anim="spotlight-lede"], [data-anim="spotlight-specs"], [data-anim="spotlight-ctas"]',
        ".spotlight",
        0.12
      );

      gsap.to(".spotlight-glow", {
        x: 60,
        y: -30,
        scale: 1.08,
        repeat: -1,
        yoyo: true,
        duration: 7,
        ease: "sine.inOut",
      });
      gsap.to(".spotlight-glow", {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: ".spotlight",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      sectionReveal(
        '[data-anim="showroom-eyebrow"], [data-anim="showroom-title"], [data-anim="showroom-lede"], [data-anim="showroom-details"], [data-anim="showroom-ctas"]',
        ".showroom",
        0.1
      );

      gsap.to('[data-anim="showroom-map"]', {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".showroom", start: "top 75%", once: true },
      });

      gsap.fromTo(
        '[data-anim="map-pin"]',
        { y: -80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "bounce.out",
          scrollTrigger: { trigger: ".showroom", start: "top 55%", once: true },
          delay: 0.2,
        }
      );

      gsap.to('[data-anim="pin-pulse"]', {
        scale: 2.6,
        opacity: 0,
        duration: 1.6,
        ease: "sine.out",
        repeat: -1,
      });

      gsap.to(".showroom-bg", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: ".showroom",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
