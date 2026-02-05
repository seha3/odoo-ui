import "./FeaturesTimeline.scss";

import Features from "./components/Features/Features";
import Install from "./components/Install/Install";
import Technology from "./components/Technology/Technology";
import Tools from "./components/Tools/Tools";

export default function FeaturesTimeline() {
  return (
    <section id="awards" className="awards">
      <div className="container awards__container position-relative">
        <div className="awards__path" aria-hidden="true" />

        <Tools />
        <Features />
        <Technology />
        <Install />
      </div>
    </section>
  );
}
