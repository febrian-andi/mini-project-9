import React from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";

function Detail({ urlApi }) {
  const id = useParams().id;
  const { data, loading, error } = useFetchData(`/${urlApi}/${id}`);
  
  return (
    <div className="py-20 px-6 md:px-28">
      <img
        src={data.banner}
        alt="Portfolio"
        className="w-full h-[500px] object-cover mb-10"
      />
      <h1 className="text-7xl font-bold mb-4">{data.title}</h1>
      <div>
        <p>
          {data.content}
        </p>
      </div>
    </div>
  );
}

export default Detail;
