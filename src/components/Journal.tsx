"use client";

import { useRef, useEffect } from "react";

const articles = [
  {
    image:
      "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=88')",
    tag: "Architecture / 5 min read",
    title: "The quiet art of entering a room.",
    description:
      "Why circulation, framing and natural light matter more than decoration.",
  },
  {
    image:
      "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=88')",
    tag: "Living / 4 min read",
    title: "Interiors designed to leave room for life.",
    description:
      "Spaces that can evolve, soften and grow with the people inside them.",
  },
  {
    image:
      "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=88')",
    tag: "Landscape / 6 min read",
    title: "Gardens that become part of your day.",
    description:
      "How shade, planting and water change the experience of coming home.",
  },
];

export default function Journal() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    grid.querySelectorAll(".journal-card").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="journal" id="journal">
      <div className="container">
        <div className="journal-head">
          <div>
            <p className="eyebrow">05 / Journal</p>
            <h2 className="display">Ideas that make a home feel like yours.</h2>
          </div>
          <a className="inline-link" href="#contact">
            View all stories <span>→</span>
          </a>
        </div>
        <div className="journal-grid" ref={gridRef}>
          {articles.map((a) => (
            <a href="#contact" className="journal-card" key={a.title}>
              <div
                className="journal-image"
                style={{ "--bg": a.image } as React.CSSProperties}
              />
              <span className="journal-tag">{a.tag}</span>
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
