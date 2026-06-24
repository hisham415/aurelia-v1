export default function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            Aurelia
            <small>
              Private residences, carefully composed for the life ahead.
            </small>
          </div>
          <div className="footer-list">
            <h4>Explore</h4>
            <a href="#philosophy">Philosophy</a>
            <a href="#residences">Arca Valley</a>
            <a href="#journal">Journal</a>
            <a href="#top">Back to top</a>
          </div>
          <div className="footer-list">
            <h4>Private enquiries</h4>
            <a href="mailto:hello@aurelia.example">hello@aurelia.example</a>
            <a href="tel:+971400000000">+971 4 000 0000</a>
            <a href="#contact">Arrange a viewing</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Aurelia Estates. Concept prototype.</span>
          <span>Dubai / UAE</span>
          <span>Privacy / Terms</span>
        </div>
      </div>
    </footer>
  );
}
