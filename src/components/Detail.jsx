import React from "react";

function Detail({ title }) {
  return (
    <div className="py-20 px-6 md:px-28">
      <img
        src="https://picsum.photos/1000/1000"
        alt="Portfolio"
        className="w-full h-[500px] object-cover mb-10"
      />
      <h1 className="text-7xl font-bold mb-4">{title}</h1>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

export default Detail;
