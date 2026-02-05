import "./AwardsFeatures.scss";
import AwardsMedia from "../shared/AwardsMedia";

// import featuresMedia from "../../../assets/awards/features-video.jpg";

export default function AwardsFeatures() {
  return (
    <div className="row align-items-center g-4 awards__block awards__block--invert award-features">
      <div className="col-12 col-lg-6">
        <span className="awards__pill awards__pill--features">Features</span>

        <h3 className="h4 fw-bold mt-3">
          Get components and examples, including tons of variables that will help you grow your business.
        </h3>

        <ul className="list-unstyled mt-4 mb-0 award-features__list">
          <li className="d-flex align-items-center gap-2">
            <span className="award-features__check" aria-hidden="true">✓</span>
            Perfect for modern startups
          </li>
          <li className="d-flex align-items-center gap-2">
            <span className="award-features__check" aria-hidden="true">✓</span>
            Fully customizable and scalable
          </li>
        </ul>
      </div>

      <div className="col-12 col-lg-6">
        <AwardsMedia
          // src={featuresMedia}
          alt="People working"
          tag="Play video ▶"
          height={260}
          rounded={16}
        />
      </div>
    </div>
  );
}
