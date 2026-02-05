import "./AwardsTools.scss";
import AwardsMedia from "../shared/AwardsMedia";

// Cambia la ruta según tu proyecto:
// import toolsThumb from "../../../assets/awards/tools-thumb.jpg";

export default function AwardsTools() {
  return (
    <div className="row align-items-center g-4 awards__block award-tools">
      {/* Visual */}
      <div className="col-12 col-lg-6">
        <div className="award-tools__visual">
          <div className="award-tools__card">
            <div className="award-tools__cardTitle">Awesome projects</div>

            <div className="award-tools__item">
              <div className="award-tools__itemText">Create the new logo</div>
              <div className="award-tools__line" />
            </div>

            <div className="award-tools__item">
              <div className="award-tools__itemText">Set up the color palette</div>
              <div className="award-tools__line" />
            </div>

            <div className="award-tools__item award-tools__item--row">
              <div>
                <div className="award-tools__itemText">Wireframe and prototype</div>
                <div className="award-tools__line award-tools__line--short" />
              </div>
              <div className="award-tools__meta">6:50 ›</div>
            </div>

            {/* thumbnail flotante */}
            <div className="award-tools__thumb">
              <AwardsMedia
                // src={toolsThumb}
                alt="Team collaborating"
                height={150}
                rounded={14}
                tag="Play video ▶"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Texto */}
      <div className="col-12 col-lg-6">
        <span className="awards__pill awards__pill--tools">Tools</span>

        <h3 className="h3 fw-bold mt-3">
          We build for designers and developers
        </h3>

        <p className="text-muted mb-0">
          Get components and examples, including tons of variables that will help you grow your business.
        </p>
      </div>
    </div>
  );
}
