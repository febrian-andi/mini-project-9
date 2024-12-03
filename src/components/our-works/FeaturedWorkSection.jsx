import React from "react";

function FeaturedWorkSection() {
  return (
    <section className="py-20 px-6 md:px-16">
        <h2 className="text-3xl font-bold">Featured-Work</h2>
      <div className="px-12">
        <div className="flex justify-end">
            <p className="text-end w-1/4">We are an award-winning creative & design agency committed to excellence since forever.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 justify-items-center items-center">
            <img src="https://picsum.photos/600/600" alt="featured work" />
            <img src="https://picsum.photos/600/600" alt="featured work" />
            <img src="https://picsum.photos/600/600" alt="featured work" />
            <img src="https://picsum.photos/600/600" alt="featured work" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedWorkSection;
