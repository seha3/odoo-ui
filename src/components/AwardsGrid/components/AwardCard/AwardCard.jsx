import "./AwardCard.scss";

const COPY = {
  airbnb: { color: "#ff5a5f", type: "rating" },
  amazon: { color: "#111827", type: "learn", product: "Tabs" },
  slack: { color: "#4A154B", type: "learn", product: "Trello" },
  spotify: { color: "#1DB954", type: "rating" },
  paypal: { color: "#003087", type: "learn", product: "Docker" },
};

export default function AwardCard({ brand, featured = false }) {
  const data = COPY[brand] ?? COPY.airbnb;

  return (
    <article className={`award-card ${featured ? "award-card--featured" : ""}`}>
      <div className="award-card__logo" style={{ color: data.color }}>
        {brand}
      </div>

      {data.type === "rating" ? (
        <>
          <div className="award-card__stars" aria-hidden="true">
            ★★★★☆
          </div>
          <div className="award-card__score">4.95 out of 5 stars</div>
          <div className="award-card__meta">from 23 reviews</div>
        </>
      ) : (
        <>
          <p className="award-card__desc">
            They build modern looking websites easily using <b>{data.product}</b>.
          </p>
          <a className="award-card__link" href="#">
            Learn more
          </a>
        </>
      )}
    </article>
  );
}
