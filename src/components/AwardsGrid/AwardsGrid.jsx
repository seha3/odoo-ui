import "./AwardsGrid.scss";
import AwardCard from "./components/AwardCard/AwardCard";

export default function AwardsGrid() {
  return (
    <section className="awards-grid">
      <div className="container">
        <span className="awards-grid__pill">Awards</span>

        <h2 className="awards-grid__title">
          Awards for design, creativity and innovation on the Internet
        </h2>

        <div className="awards-grid__cards">
          <AwardCard brand="airbnb" />
          <AwardCard brand="amazon" featured />
          <AwardCard brand="slack" />
          <AwardCard brand="spotify" />
          <AwardCard brand="paypal" />
        </div>
      </div>
    </section>
  );
}
