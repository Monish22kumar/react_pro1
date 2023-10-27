import React from "react";
import HeroSection from "./HeroSection.js";
import HeroTwoSection from "./HeroTwoSection.js";
import HeroThreeSection from "./HeroThreeSection.js";
import HeroFourSection from "./HeroFourSection.js";
import HeroFiveSection from "./HeroFiveSection.js";
import HeroSixSection from "./HeroSixSection.js";
import HeroSevenSection from "./HeroSevenSection.js";

const Sections = () => {
  //Rendering every of the section components
  return (
    <main>
      <HeroSection />
      <HeroTwoSection />
      <HeroThreeSection />
      <HeroFourSection />
      <HeroFiveSection />
      <HeroSixSection />
      <HeroSevenSection />
    </main>
  );
  //END
};

export default Sections;
