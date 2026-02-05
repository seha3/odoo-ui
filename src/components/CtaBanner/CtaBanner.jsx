import "./CtaBanner.scss";

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-banner__wrap">
          <div className="cta-banner__content">
            <h3 className="cta-banner__title">Infinite solutions</h3>
            <p className="cta-banner__text">
              Intuitive markup, powerful and lightning fast build tools,
              everything you need to turn your ideas into incredible products.
            </p>
          </div>

          <a href="#" className="btn btn-light cta-banner__btn">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
