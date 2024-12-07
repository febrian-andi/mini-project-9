import React from "react";
import HeroSection from "../components/HeroSection";
import SuccesMetrics from "../components/SuccesMetrics";
import ClientSection from "../components/ClientSection";
import ContactSection from "../components/contact/ContactSection";
import ContactInformation from "../components/contact/OfficeBanner";

function ContactUsPage() {
  return (
    <>
      <HeroSection title="We would love to hear from you." handsImage="three" />
      <ContactSection />
      <ContactInformation />
      <SuccesMetrics />
      <ClientSection />
    </>
  );
}

export default ContactUsPage;
