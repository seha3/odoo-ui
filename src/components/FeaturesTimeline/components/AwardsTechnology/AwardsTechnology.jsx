import "./AwardsTechnology.scss";

export default function AwardsTechnology() {
  return (
    <div className="row align-items-center g-4 awards__block awards-technology">
      {/* Collage */}
      <div className="col-12 col-lg-6">
        <div className="awards-technology__collage">
          {/* Columna izquierda */}
          <div className="awards-technology__col">
            <div className="tech-card tech-card--photo" />
            <div className="tech-card tech-card--user" />
            <div className="tech-card tech-card--badge" />
          </div>

          {/* Columna derecha */}
          <div className="awards-technology__col">
            <div className="tech-card tech-card--rating" />
            <div className="tech-card tech-card--kit" />
          </div>
        </div>
      </div>

      {/* Texto */}
      <div className="col-12 col-lg-6">
        <span className="awards__pill awards__pill--tech">Technology</span>

        <h3 className="h4 fw-bold mt-3">
          We use the latest technologies on the market
        </h3>

        <p className="text-muted">
          Get components and examples, including tons of variables that will help you grow your business.
        </p>

        <a href="#" className="awards__link">See case studies</a>
      </div>
    </div>
  );
}
