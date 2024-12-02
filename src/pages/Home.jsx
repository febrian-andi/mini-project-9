import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServiceSection from "../components/home/ServiceSection";
import IntroSection from "../components/home/IntroSection";
import TestomonialsSection from "../components/home/TestimonialsSection";

function Home() {
    return (
        <div>
            <HeroSection />
            <ServiceSection />
            <IntroSection />
            <TestomonialsSection />
        </div>
    );
}

export default Home;