import './Hero.scss';
import HeroCard from '../HeroCard/HeroCard';
import BrandIcon from '../BrandIcon/BrandIcon';
import { siGoogle, siSpotify, siAirbnb, siPaypal } from "simple-icons/icons";


export default function Hero() {
  return (
    <section id="hero" className="hero-section py-5 custom-hero">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6">
            <h1 className="display-5 fw-bold mb-3 text-white">
              Development done right
            </h1>
            <p className="lead text-secondary mb-4 text-white">
              Build fast, ship confidently and keep your product maintainable. This page is a React + Bootstrap
              implementation of the provided mock-up (adapted for responsiveness).
            </p>

            <div className="d-flex flex-wrap gap-2">
              <a className="btn btn-secondary btn-lg" href="#awards">
                Get started +
              </a>
            </div>
              <div className="trusted-logos d-flex align-items-center gap-4 flex-wrap">

               {/* Trusted by */}
              <div className="trusted-by mt-5 d-flex flex-wrap align-items-center gap-3">
                <span className="trusted-label small text-white-50">Trusted by:</span>

                <div className="trusted-logos d-flex align-items-center gap-4 flex-wrap">
                  <BrandIcon icon={siGoogle} title="Google" />
                  <BrandIcon icon={siSpotify} title="Spotify" />
                  <BrandIcon icon={siAirbnb} title="Airbnb" />
                  <BrandIcon icon={siPaypal} title="PayPal" />
                </div>
              </div>
            </div>

          </div>

          {/* Hero Card */}
          <div className="col-12 col-lg-6 d-flex justify-content-lg-end">
            <div className="hero-card">
              <HeroCard />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
