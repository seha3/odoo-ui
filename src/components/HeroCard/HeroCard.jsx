import "./HeroCard.scss";

export default function HeroCard() {
  return (
    <div className="hero-card p-3 p-md-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="fw-semibold text-dark">Manage cards</div>

        <button
          type="button"
          className="btn btn-outline-secondary btn-sm hero-card__add"
        >
          Add new
        </button>
      </div>

      {/* Credit card */}
      <div className="credit-card mb-3">
        <div className="d-flex align-items-start justify-content-between">
          <div className="mc-badge" aria-hidden="true">
            <span className="mc red" />
            <span className="mc yellow" />
          </div>

          <span className="badge rounded-pill credit-status">Active</span>
        </div>

        <div className="mt-4 text-uppercase credit-label">Card number</div>
        <div className="credit-number mt-2">
          4358 - 7421 - 9256 - 6682
        </div>

        <div className="row mt-4 g-3">
          <div className="col-7">
            <div className="text-uppercase credit-label">Name</div>
            <div className="credit-value">John Snow</div>
          </div>
          <div className="col-5">
            <div className="text-uppercase credit-label">Expiry date</div>
            <div className="credit-value">11/23</div>
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="list-row">
        <div>
          <div className="fw-semibold text-dark">Starbucks</div>
          <div className="small text-muted">
            Pending - San Francisco, United States
          </div>
        </div>
        <div className="fw-semibold text-dark">$5,50 USD</div>
      </div>

      <hr className="hero-card__divider" />

      <div className="list-row">
        <div>
          <div className="fw-semibold text-dark">Nike Sports</div>
          <div className="small text-muted">
            Pending - Lisbon, Portugal
          </div>
        </div>
        <div className="fw-semibold text-dark">$129,00 USD</div>
      </div>

      <hr className="hero-card__divider" />

      <a href="#" className="hero-card__viewall">
        View all ›
      </a>
    </div>
  );
}
