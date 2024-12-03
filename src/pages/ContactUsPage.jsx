import React from "react";
import HeroSection from "../components/HeroSection";
import SuccesMetrics from "../components/SuccesMetrics";
import ClientSection from "../components/ClientSection";

function ContactUsPage() {
  return (
    <>
      <HeroSection title="We would love to hear from you." handsImage="three" />
      <SuccesMetrics />
      <ClientSection />
    </>
  );
}

export default ContactUsPage;
