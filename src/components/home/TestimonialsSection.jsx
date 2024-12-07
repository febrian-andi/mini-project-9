import React from "react";
import QuoteLeftIcon from "../../assets/icons/QuoteLeftIcon";
import { useFetchData } from "../../hooks/useFetchData";

function TestomonialsSection() {
  const { data: testimonials, loading, error } = useFetchData("/testimonials");

  if (loading) return <p className="text-center">Loading...</p>;

  if (error) return <p className="text-center text-red">{error}</p>;

  if (!testimonials || !testimonials.data.length === 0) return <p>No data found</p>;

  return (
    <section className="py-20 px-6 md:px-12">
      <h1 className="text-3xl font-bold md:pl-32 mb-12">
        What our clients say about us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {testimonials.data.map((testimonial) => (
          <div className="flex flex-row space-x-4" key={testimonial.id}>
            <div>
              <QuoteLeftIcon width="35" height="35" />
            </div>
            <div>
              <p className="md:h-full">
                {testimonial.message}
              </p>
              <div className="flex space-x-4 items-center mt-4 md:mt-0">
                <img
                  src={testimonial.foto_profile}
                  alt="photo profile"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestomonialsSection;
