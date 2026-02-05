import "./FeaturesTimeline.scss";

import Tools from "./components/Tools/Tools";
import Features from "./components/Features/Features";
import Technology from "./components/Technology/Technology";
import Install from "./components/Install/Install";

export default function FeaturesTimeline() {
  return (
    <section className="features-timeline">
      <div className="container features-timeline__wrap position-relative">
        <div className="features-timeline__path" aria-hidden="true" />

        <Tools />
        <Features />
        <Technology />
        <Install />
      </div>
    </section>
  );
}
