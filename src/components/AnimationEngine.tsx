"use client";

import { useEffect, useCallback } from "react";

/**
 * Adds scroll-linked progress, 3D card tilts,
 * and magnetic button interactions across the page.
 */
export default function AnimationEngine() {
  // 3D tilt on property card and pillar cards
  const handleCardMouseMove = useCallback((e: MouseEvent) => {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    card.style.transform = `perspective(800px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale(1.01)`;
  }, []);

  const handleCardLeave = useCallback((e: MouseEvent) => {
    (e.currentTarget as HTMLElement).style.transform = "";
  }, []);

  // Magnetic buttons
  const handleMagnet = useCallback((e: MouseEvent) => {
    const btn = e.currentTarget as HTMLElement;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
  }, []);

  const handleMagnetLeave = useCallback((e: MouseEvent) => {
    (e.currentTarget as HTMLElement).style.transform = "";
  }, []);

  // Scroll-based progress + parallax layers
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;

    // Parallax speed layers
    document.querySelectorAll<HTMLElement>("[data-speed]").forEach((el) => {
      const speed = parseFloat(el.dataset.speed || "0.5");
      const rect = el.getBoundingClientRect();
      const offset = (rect.top - vh) * speed * 0.1;
      el.style.transform = `translateY(${offset}px)`;
    });

    // Progress bar on scroll
    const progress = Math.min(scrollY / (document.body.scrollHeight - vh), 1);
    document.documentElement.style.setProperty("--scroll-progress", `${progress}`);
  }, []);

  useEffect(() => {
    // Scroll effects
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 3D tilt on cards
    const tiltCards = document.querySelectorAll<HTMLElement>(".property-wrap, .pillar");
    tiltCards.forEach((card) => {
      card.addEventListener("mousemove", handleCardMouseMove as EventListener);
      card.addEventListener("mouseleave", handleCardLeave as EventListener);
    });

    // Magnetic buttons
    const magnets = document.querySelectorAll<HTMLElement>(".circle-button, .video-trigger, .arrow-btn");
    magnets.forEach((btn) => {
      btn.addEventListener("mousemove", handleMagnet as EventListener);
      btn.addEventListener("mouseleave", handleMagnetLeave as EventListener);
    });

    // Staggered text reveal - split h1 words
    const h1 = document.querySelector<HTMLElement>(".hero h1");
    if (h1 && !h1.dataset.split) {
      h1.dataset.split = "true";
      const html = h1.innerHTML;
      const words = html.split(/(<br\s*\/?>)/gi);
      h1.innerHTML = words
        .map((segment) => {
          if (segment.match(/<br\s*\/?>/i)) return segment;
          return segment
            .split(" ")
            .filter(Boolean)
            .map(
              (word, i) =>
                `<span class="word" style="animation-delay:${1.4 + i * 0.12}s">${word}</span>`
            )
            .join(" ");
        })
        .join("");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      tiltCards.forEach((card) => {
        card.removeEventListener("mousemove", handleCardMouseMove as EventListener);
        card.removeEventListener("mouseleave", handleCardLeave as EventListener);
      });
      magnets.forEach((btn) => {
        btn.removeEventListener("mousemove", handleMagnet as EventListener);
        btn.removeEventListener("mouseleave", handleMagnetLeave as EventListener);
      });
    };
  }, [handleScroll, handleCardMouseMove, handleCardLeave, handleMagnet, handleMagnetLeave]);

  return null;
}
