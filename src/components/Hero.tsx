export default function Hero() {
  return (
    <section className="hero" aria-label="Aurelia signature residence">
      <div className="hero-content">
        <div className="hero-kicker">
          <i></i> New release — Arca Valley
        </div>
        <h1>
          Homes that
          <br />
          hold the horizon.
        </h1>
        <div className="hero-bottom">
          <p className="hero-copy">
            A considered collection of private residences where natural rhythm
            and meticulous architecture meet.
          </p>
          <div className="hero-actions">
            <a className="inline-link" href="#residences">
              Discover Arca Valley <span>→</span>
            </a>
            <a
              className="circle-button"
              href="#contact"
              aria-label="Request a private viewing"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-scroll">Scroll to explore</div>
    </section>
  );
}
