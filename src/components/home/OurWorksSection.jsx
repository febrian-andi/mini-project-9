import React from "react";

function OurWorksSection() {
  return (
    <section className="py-20 ">
      <div className="px-6 md:px-12 mb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold md:pl-32">Our Work So Far</h1>
          <ul className="flex flex-row space-x-8">
            <li>ALL</li>
            <li>BRANDING</li>
            <li>ILUSTRATION</li>
            <li>PRODUCT DESIGN</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div>
          <img
            src="https://picsum.photos/400/400"
            alt="work 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="row-span-2">
          <img
            src="https://picsum.photos/400/400"
            alt="work 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://picsum.photos/400/400"
            alt="work 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://picsum.photos/400/400"
            alt="work 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://picsum.photos/400/400"
            alt="work 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://picsum.photos/400/400"
            alt="work 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://picsum.photos/400/400"
            alt="work 1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default OurWorksSection;
