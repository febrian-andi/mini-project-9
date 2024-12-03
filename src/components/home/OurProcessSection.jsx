import React from "react";
import SideImage from "../../assets/side-image.png";
import LampIcon from "../../assets/icons/lamp-icon.png";

function OurProcessSection() {
  return (
    <section className="py-20 px-6 md:px-20 lg:px-32 bg-neutral-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0">
        <div className="flex justify-center md:justify-start">
          <object data={SideImage} type="image/png" className="w-11/12">
            <img src={SideImage} alt="Side Image" className="w-full h-auto" />
          </object>
        </div>
        <div>
          <h1 className="text-4xl font-bold">
            A simple, yet effective three step process.
          </h1>
          <div className="flex flex-col space-y-10 mt-6">
            <div className="flex flex-row space-x-6">
              <img
                src={LampIcon}
                alt="Step 1"
                className="w-[70px] h-[70px] object-cover rounded-full bg-white shadow-lg p-4"
              />
              <div>
                <h2 className="font-bold text-xl">Idea Initiation</h2>
                <p className="text-lg">
                  For a start, we'll uncover what makes you stand apart and
                  creatively position your brand and business.
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-6">
              <img
                src={LampIcon}
                alt="Step 1"
                className="w-[70px] h-[70px] object-cover rounded-full bg-white shadow-lg p-4"
              />
              <div>
                <h2 className="font-bold text-xl">Idea Initiation</h2>
                <p className="text-lg">
                  For a start, we'll uncover what makes you stand apart and
                  creatively position your brand and business.
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-6">
              <img
                src={LampIcon}
                alt="Step 1"
                className="w-[70px] h-[70px] object-cover rounded-full bg-white shadow-lg p-4"
              />
              <div>
                <h2 className="font-bold text-xl">Idea Initiation</h2>
                <p className="text-lg">
                  For a start, we'll uncover what makes you stand apart and
                  creatively position your brand and business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-28">
        Wherever you are in your journey, we'd love to hear from you.{" "}
        <span className="font-bold underline">Book a free call</span>
      </p>
    </section>
  );
}

export default OurProcessSection;
