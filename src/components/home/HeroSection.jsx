import React from "react";
import HeroSectionBg from "../../assets/hero-section-home-bg.png";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative">
      <img
        src={HeroSectionBg}
        alt="hero section background"
        className="w-full object-cover xl:h-full"
      />
      <div className="absolute inset-0 left-[45%] top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-7xl font-bold">
            Let's create<br/> something<br/> great together.
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
