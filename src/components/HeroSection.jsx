import React from "react";
import ManyHands from "../assets/many-hands.png";
import ThreeHands2 from "../assets/three-hands-2.png";

function HeroSection({ title, handsImage }) {
  return (
    <section className="bg-yellow-primary-darker">
      <div className="pt-20">
        <h1 className="font-bold text-7xl text-center w-1/2 mx-auto">{title}</h1>
        <div
          className={`${
            handsImage === "many" ? "" : "flex justify-end"
          } w-full`}
        >
          <object
            data={handsImage === "many" ? ManyHands : ThreeHands2}
            type="image/png"
            aria-label="Many hands"
            className={`${
              handsImage === "many" ? "w-full" : "w-1/2"
            }`}
          >
            <img
              src={ManyHands}
              alt="Many hands"
              className={`${
                handsImage === "many" ? "w-full" : "w-1/2"
              }`}
            />
          </object>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
