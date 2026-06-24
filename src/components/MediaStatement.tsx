export default function MediaStatement() {
  return (
    <section className="media-statement" aria-label="Aurelia film">
      <div className="container media-layout">
        <div>
          <p className="eyebrow">04 / A sense of place</p>
          <h2 className="display">
            The best views are the ones you return to.
          </h2>
        </div>
        <div>
          <a
            className="video-trigger"
            href="#contact"
            aria-label="Play brand film"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="m9 6 8 6-8 6V6Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <p>
            Watch a short visual study of life in Arca Valley—where homes open
            to gardens, light and a quieter pace of day.
          </p>
        </div>
      </div>
    </section>
  );
}
