export default function Hero() {
  return (
    <section className="hero" aria-label="Aurelia signature residence">
      {/* Background video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80"
        aria-hidden="true"
      >
        <source src="/video/DubaiRealEstate.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" aria-hidden="true" />

      {/* Decorative floating orbs */}
      <div className="hero-orb hero-orb--1" aria-hidden="true" />
      <div className="hero-orb hero-orb--2" aria-hidden="true" />
      <div className="hero-orb hero-orb--3" aria-hidden="true" />

      {/* Animated line decorations */}
      <div className="hero-line hero-line--1" aria-hidden="true" />
      <div className="hero-line hero-line--2" aria-hidden="true" />
      <div className="hero-line hero-line--3" aria-hidden="true" />

      {/* Grain texture */}
      <div className="hero-grain" aria-hidden="true" />

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
