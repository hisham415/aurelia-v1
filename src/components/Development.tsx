export default function Development() {
  return (
    <section className="development" id="residences">
      <div className="container">
        <div className="development-title">
          <div>
            <p className="eyebrow">03 / Signature address</p>
            <h2 className="display">
              Arca Valley, an address shaped by the landscape.
            </h2>
          </div>
          <p>
            Private villas and garden residences set among shaded pathways,
            reflective water and over 18 hectares of preserved greenery.
          </p>
        </div>
        <article className="property-wrap">
          <div
            className="property-image"
            role="img"
            aria-label="Contemporary villa in a landscaped setting"
          />
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
                <div>
                  <span>Collection</span>
                  <strong>24 private homes</strong>
                </div>
                <div>
                  <span>Location</span>
                  <strong>Al Noor Valley</strong>
                </div>
                <div>
                  <span>Starting from</span>
                  <strong>On private request</strong>
                </div>
                <div>
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
