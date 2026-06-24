"use client";

import { useState, useRef, useCallback, useEffect } from "react";

const pillars = [
  {
    index: "01 / 03",
    title: "Material honesty",
    description:
      "Stone, timber and metal chosen for their tactile character and their ability to age beautifully.",
    bg: "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1450&q=88')",
  },
  {
    index: "02 / 03",
    title: "Quiet precision",
    description:
      "Architecture is resolved with restraint, so the life inside every residence remains the true focus.",
    bg: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1450&q=88')",
  },
  {
    index: "03 / 03",
    title: "Nature in reach",
    description:
      "Gardens, water and shade are not decoration. They form a daily, restorative part of home.",
    bg: "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1450&q=88')",
  },
];

export default function Pillars() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const updateTransform = useCallback(() => {
    if (!trackRef.current) return;
    const card = trackRef.current.firstElementChild as HTMLElement | null;
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(trackRef.current).gap) || 0;
    trackRef.current.style.transform = `translateX(${-current * (cardWidth + gap)}px)`;
  }, [current]);

  useEffect(() => {
    updateTransform();
    window.addEventListener("resize", updateTransform);
    return () => window.removeEventListener("resize", updateTransform);
  }, [updateTransform]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    section.querySelectorAll(".pillars-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pillars" aria-labelledby="pillars-title" ref={sectionRef}>
      {/* Ambient decorations */}
      <div className="pillars-glow" aria-hidden="true" />
      <div className="pillars-float pillars-float--1" aria-hidden="true" />
      <div className="pillars-float pillars-float--2" aria-hidden="true" />
      <div className="pillars-float pillars-float--3" aria-hidden="true" />

      <div className="container">
        <div className="pillars-head pillars-reveal">
          <div>
            <p className="eyebrow">02 / What endures</p>
            <h2 className="display" id="pillars-title">
              Crafted with intent. Lived with ease.
            </h2>
          </div>
          <div
            className="pillars-controls"
            aria-label="Pillars carousel controls"
          >
            <button
              className="arrow-btn"
              onClick={() =>
                setCurrent((c) => (c - 1 + pillars.length) % pillars.length)
              }
              aria-label="Previous pillar"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 12H5m6 6-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="arrow-btn"
              onClick={() => setCurrent((c) => (c + 1) % pillars.length)}
              aria-label="Next pillar"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="pillars-viewport pillars-reveal pillars-reveal--cards">
          <div className="pillars-track" ref={trackRef}>
            {pillars.map((p) => (
              <article
                key={p.index}
                className="pillar"
                style={{ "--bg": p.bg } as React.CSSProperties}
              >
                <span className="index">{p.index}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="pillars-dots">
          {pillars.map((_, i) => (
            <button
              key={i}
              className={`pillars-dot${current === i ? " active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
