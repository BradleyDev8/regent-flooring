export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-row">
          <div className="footer-brand">
            <img src="/assets/regent-logo.png" alt="Regent Flooring" />
          </div>
          <div className="footer-address">
            24-26 Regent St, Newtownards · BT23 4LJ
          </div>
          <div className="footer-contact">
            <a href="tel:02891812345">028 9181 2345</a>
            <span className="footer-sep">·</span>
            <a href="mailto:hello@regentflooring.co.uk">
              hello@regentflooring.co.uk
            </a>
          </div>
          <div className="footer-legal">
            <span>© 2026 Regent Flooring Ltd</span>
            <span className="footer-sep">·</span>
            <a>Privacy</a>
            <a>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
