import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedWorkSection from "../components/our-works/FeaturedWorkSection";
import ClientSection from "../components/ClientSection";

function OurWorksPage() {
  return (
    <>
      <HeroSection
        title="The work we do, and the people we help."
        handsImage="many"
      />
      <FeaturedWorkSection />
      <ClientSection />
    </>
  );
}

export default OurWorksPage;
