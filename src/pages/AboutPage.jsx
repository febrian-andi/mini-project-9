import React from "react";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/about/IntroSection";
import SuccesMetrics from "../components/SuccesMetrics";
import ClientSection from "../components/ClientSection";
import TeamSection from "../components/about/TeamSection";

function AboutPage() {
  return (
    <>
      <HeroSection
        title="We specialize in problem solving."
        handsImage="many"
      />
      <IntroSection />
      <TeamSection />
      <SuccesMetrics />
      <ClientSection />
    </>
  );
}

export default AboutPage;
