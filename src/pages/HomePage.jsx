import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServiceSection from "../components/home/ServiceSection";
import IntroSection from "../components/home/IntroSection";
import TestomonialsSection from "../components/home/TestimonialsSection";
import OurProcessSection from "../components/home/OurProcessSection";
import ClientSection from "../components/home/ClientSection";
import ArticleList from "../components/ArticleList";
import OurWorksSection from "../components/home/OurWorksSection";

function HomePage() {
    return (
        <>
            <HeroSection />
            <ServiceSection />
            <IntroSection />
            <OurWorksSection />
            <OurProcessSection />
            <TestomonialsSection />
            <ClientSection />
            <ArticleList page="home"/>
        </>
    );
}

export default HomePage;