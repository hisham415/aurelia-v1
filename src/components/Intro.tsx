"use client";

import { useRef, useEffect } from "react";

export default function Intro() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.14 },
    );
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="intro" id="philosophy">
      <div className="container intro-grid">
        <div className="reveal" ref={leftRef}>
          <p className="eyebrow">01 / A slower kind of luxury</p>
          <h2 className="display">
            Designed around the life you want to live.
          </h2>
        </div>
        <div className="intro-right reveal" ref={rightRef}>
          <p className="intro-copy">
            We create places with enough space to breathe. Every line, material
            and view is composed to feel effortless over time—not simply
            impressive on day one.
          </p>
          <a className="inline-link" href="#residences">
            Our approach <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
