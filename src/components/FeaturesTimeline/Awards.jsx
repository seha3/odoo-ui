import "./Awards.scss";

import AwardsFeatures from "./components/AwardsFeatures/AwardsFeatures";
import AwardsInstall from "./components/AwardsInstall/AwardsInstall";
import AwardsTechnology from "./components/AwardsTechnology/AwardsTechnology";
import AwardsTools from "./components/AwardsTools/AwardsTools";

export default function Awards() {
  return (
    <section id="awards" className="awards">
      <div className="container awards__container position-relative">
        <div className="awards__path" aria-hidden="true" />

        <AwardsTools />
        <AwardsFeatures />
        <AwardsTechnology />
        <AwardsInstall />
      </div>
    </section>
  );
}
