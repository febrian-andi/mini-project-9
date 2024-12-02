import React from "react";

function IntroSection() {
  return (
    <section className="py-20 md:px-20 lg:px-32 border-b-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center space-y-4 lg:space-y-0 gap-4">
        <div className="md:col-span-2">
          <h1 className="text-7xl font-bold text-center lg:text-left"><span className="text-yellow-primary">hello</span>.</h1>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-center md:text-left">Award winning<br/> agency specializing<br/> in creative design</h2>
        </div>
        <div className="flex flex-col items-center md:items-start space-y-4">
          <p className="text-center md:text-left">We help businesses grow, launch<br/> products and build enduring relationships<br/> with our communities.</p>
          <a href="#" className="underlined ">OUR INFO</a>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
