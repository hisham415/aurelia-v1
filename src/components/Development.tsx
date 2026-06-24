"use client";

import { useRef, useEffect } from "react";

export default function Development() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    section
      .querySelectorAll(".anim-item")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="development" id="residences" ref={sectionRef}>
      {/* Animated decorative corner marks */}
      <div className="dev-corner dev-corner--tl" aria-hidden="true" />
      <div className="dev-corner dev-corner--br" aria-hidden="true" />

      <div className="container">
        <div className="development-title anim-item">
          <div>
            <p className="eyebrow">03 / Signature address</p>
            <h2 className="display">
              Arca Valley, an address shaped
              <br />
              by the landscape.
            </h2>
          </div>
          <p>
            Private villas and garden residences set among shaded pathways,
            reflective water and over 18 hectares of preserved greenery.
          </p>
        </div>
        <article className="property-wrap anim-item">
          <div
            className="property-image"
            role="img"
            aria-label="Contemporary villa in a landscaped setting"
          >
            <div className="property-image-overlay" aria-hidden="true" />
          </div>
          <div className="property-info">
            <div>
              <p className="eyebrow">Now accepting private appointments</p>
              <h3 className="display">The Garden Houses</h3>
              <p>
                Four and five bedroom residences designed with framed garden
                views, double-height living spaces, and complete privacy.
              </p>
            </div>
            <div>
              <div className="property-meta">
                <div className="anim-item">
                  <span>Collection</span>
                  <strong>24 private homes</strong>
                </div>
                <div className="anim-item">
                  <span>Location</span>
                  <strong>Al Noor Valley</strong>
                </div>
                <div className="anim-item">
                  <span>Starting from</span>
                  <strong>On private request</strong>
                </div>
                <div className="anim-item">
                  <span>Handover</span>
                  <strong>Q4 2028</strong>
                </div>
              </div>
              <div style={{ marginTop: "34px" }}>
                <a
                  className="nav-cta"
                  href="#contact"
                  style={{ color: "var(--ink)", borderColor: "var(--ink)" }}
                >
                  Register interest
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
