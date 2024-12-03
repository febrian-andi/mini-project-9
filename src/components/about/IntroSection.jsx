import React from "react";

const IntroSection = () => {
  return (
    <section className="py-20 px-6 md:px-16">
      <h1 className="font-bold text-4xl">Who we are</h1>
      <div className="flex justify-between mt-4">
        <p className="w-2/3">
            We love what we do and create partnerships with our clients to ensure
            their digital transformation is positioned for long-term success.We
            believe that the human dimensions essential to start any successful
            project and that this is where splendid emotional relationships between
            the company and people are born.
        </p>
        <p className="font-bold text-3xl text-gray-500">EST. 2020</p>
      </div>
      <img src="https://picsum.photos/1000/600" alt="hero image" className="mt-8 w-full h-[500px]" />
    </section>
  );
};

export default IntroSection;
