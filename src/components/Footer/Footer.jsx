import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top CTA */}
        <div className="footer-cta">
          <div className="footer-cta__text">
            <h3 className="footer-cta__title">Brilliant solutions for your ideas</h3>
            <p className="footer-cta__subtitle">Modern looking websites.</p>
          </div>

          <div className="footer-cta__actions">
            <a href="#" className="btn btn-light btn-sm footer-cta__btn">
              <span className="footer-cta__icon" aria-hidden="true">▢</span>
              Documentation
            </a>
            <a href="#" className="btn btn-primary btn-sm footer-cta__btn">
              Purchase now
            </a>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Main footer content */}
        <div className="row g-4 footer-main">
          {/* Brand column */}
          <div className="col-12 col-lg-4">
            <div className="footer-brand">
              <div className="footer-brand__logo">odoo</div>
              <p className="footer-brand__desc">
                Odoo attempts to bring the best development experience to designers and developers by offering
                the tools needed for having a quick and solid start in most web projects.
              </p>

              <div className="footer-social" aria-label="Social links">
                <a href="#" className="footer-social__link" aria-label="Twitter">●</a>
                <a href="#" className="footer-social__link" aria-label="Facebook">●</a>
                <a href="#" className="footer-social__link" aria-label="Instagram">●</a>
                <a href="#" className="footer-social__link" aria-label="GitHub">●</a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="col-12 col-lg-8">
            <div className="footer-cols">
              <div className="footer-col">
                <div className="footer-col__title">Account</div>
                <ul className="footer-col__list">
                  <li><a href="#">Profile</a></li>
                  <li><a href="#">Settings</a></li>
                  <li><a href="#">Billing</a></li>
                  <li><a href="#">Notifications</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <div className="footer-col__title">About</div>
                <ul className="footer-col__list">
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <div className="footer-col__title">Company</div>
                <ul className="footer-col__list">
                  <li><a href="#">Community</a></li>
                  <li><a href="#">Help center</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="footer-divider footer-divider--bottom" />

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-bottom__left">© Odoo. All rights reserved</div>
          <div className="footer-bottom__right">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
