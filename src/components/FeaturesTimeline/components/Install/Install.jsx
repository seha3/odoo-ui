import "./Install.scss";
import Media from "../Media/Media";

// import installMedia from "../../../assets/awards/install-video.jpg";

export default function Install() {
  return (
    <div className="row align-items-center g-4 awards__block awards__block--invert awards-install">
      {/* Texto */}
      <div className="col-12 col-lg-6">
        <span className="awards__pill awards__pill--install">Easy to install</span>

        <h3 className="h4 fw-bold mt-3">Download, install and run.</h3>

        <p className="text-muted">
          Get components and examples, including tons of variables that will help you grow your business.
        </p>

        <div className="d-flex gap-3 mt-4 flex-wrap">
          <button type="button" className="btn btn-dark awards-install__store">
            App Store
          </button>
          <button type="button" className="btn btn-dark awards-install__store">
            Play Store
          </button>
        </div>
      </div>

      {/* Media */}
      <div className="col-12 col-lg-6">
        <Media
          // src={installMedia}
          alt="People watching a laptop"
          tag="Play video ▶"
          height={280}
          rounded={16}
          shadow={true}
        />
      </div>
    </div>
  );
}
