import React from "react";
import Logo from "../assets/logo.svg";
import ThreeHandsImage from "../assets/three-hands.png";

function Banner() {
  return (
    <div className="bg-yellow-primary-darker py-20 mb-16 relative">
      <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-x-8">
        <div>
          <img src={Logo} alt="logo" className="h-[160px]" />
        </div>
        <div className="flex justify-end pr-4 lg:pr-0">
          <h1 className="text-3xl font-bold text-black">
            Grow Your Business.
            <br /> Build Great Products.
          </h1>
        </div>
        <div className="col-span-2 lg:col-span-1 flex justify-end lg:justify-start pr-4 lg:pr-0">
          <button
            className="bg-black text-white px-9 py-4 font-semibold hover:border-4 
            hover:border-yellow-primary-darker hover:border-double"
          >
            Book a free call
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 right-[50%] lg:right-0">
        <img src={ThreeHandsImage} alt="three hands" className="w-[320px]" />
      </div>
    </div>
  );
}

export default Banner;
