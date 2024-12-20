import React from "react";
import HeroSection from "../components/HeroSection";
import Detail from "../components/Detail";

function OurWorksDetailPage() {
  return (
    <>
      <HeroSection title="We work with love." handsImage="three" />
      <Detail urlApi="portfolios"/>
    </>
  );
}

export default OurWorksDetailPage;
