import React from "react";
import { Link } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";

function FeaturedWorkSection() {
  const { data, loading, error } = useFetchData("/portfolios");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="py-20 px-6 md:px-16">
      <h2 className="text-3xl font-bold">Featured-Work</h2>
      <div className="px-12">
        <div className="flex justify-end">
          <p className="text-end w-1/4">
            We are an award-winning creative & design agency committed to
            excellence since forever.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 justify-items-center items-center">
          {data.data.map((item) => (
            <Link to={`/our-works/${item.id}` } key={item.id} className="relative">
              <img src={item.banner} alt="featured work" />
              <h3 className="text-xl font-semibold absolute bottom-0 p-3 bg-white opacity-75 w-full">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWorkSection;
