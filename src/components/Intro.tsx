"use client";

import { useRef, useEffect, useState, useCallback } from "react";

function CountUp({
  target,
  duration = 2000,
}: {
  target: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic for smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span className="intro-stat-number" ref={ref}>
      {count}
    </span>
  );
}

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );

    section.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="intro" id="philosophy" ref={sectionRef}>
      {/* Decorative animated elements */}
      <div className="intro-deco intro-deco--ring" aria-hidden="true" />
      <div className="intro-deco intro-deco--dot" aria-hidden="true" />
      <div className="intro-deco intro-deco--line" aria-hidden="true" />

      <div className="container">
        {/* Top text area */}
        <div className="intro-header reveal">
          <p className="eyebrow">01 / A slower kind of luxury</p>
          <h2 className="display">
            Designed around the life
            <br />
            you want to live.
          </h2>
        </div>

        {/* Image + content split */}
        <div className="intro-split">
          <div className="intro-image reveal">
            <div
              className="intro-image-inner"
              role="img"
              aria-label="Minimalist living room with natural light"
            />
            <div className="intro-image-badge" aria-hidden="true">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 9.5L12 4l9 5.5v9L12 24l-9-5.5v-9Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M12 4v20M3 9.5l9 5.5 9-5.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              <strong>48</strong>
              <span>Homes built</span>
            </div>
          </div>

          <div className="intro-content">
            <p className="intro-copy reveal">
              We create places with enough space to breathe. Every line,
              material and view is composed to feel effortless over time—not
              simply impressive on day one.
            </p>

            <div className="intro-stats reveal">
              <div className="intro-stat">
                <CountUp target={12} duration={1800} />
                <span className="intro-stat-label">Years of craftsmanship</span>
              </div>
              <div className="intro-stat">
                <CountUp target={48} duration={2200} />
                <span className="intro-stat-label">Residences completed</span>
              </div>
              <div className="intro-stat">
                <CountUp target={6} duration={1400} />
                <span className="intro-stat-label">Design awards</span>
              </div>
            </div>

            <a className="inline-link reveal" href="#residences">
              Our approach <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
