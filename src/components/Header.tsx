"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onOpenInquiry: () => void;
}

export default function Header({
  menuOpen,
  onToggleMenu,
  onOpenInquiry,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sync = () => setScrolled(window.scrollY > 42);
    window.addEventListener("scroll", sync, { passive: true });
    sync();
    return () => window.removeEventListener("scroll", sync);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <nav className="nav container" aria-label="Primary navigation">
        <button
          className="menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={onToggleMenu}
        >
          <span style={{ transform: menuOpen ? "rotate(45deg)" : "" }} />
          <span style={{ transform: menuOpen ? "rotate(-45deg)" : "" }} />
        </button>
        <div className="nav-left">
          <a className="nav-link" href="#philosophy">
            Philosophy
          </a>
          <a className="nav-link" href="#residences">
            Residences
          </a>
          <a className="nav-link" href="#journal">
            Journal
          </a>
        </div>
        <a href="#top" className="logo" aria-label="Aurelia Estates home">
          Aurelia<small>ESTATES</small>
        </a>
        <div className="nav-right">
          <a className="nav-link" href="#contact">
            Contact
          </a>
          <button className="nav-cta" onClick={onOpenInquiry}>
            Request a private viewing
          </button>
        </div>
      </nav>
    </header>
  );
}
