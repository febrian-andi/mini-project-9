import React from "react";
import { Link } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

function ArticleCard() {
  return (
    <div className="bg-white shadow-md h-[500px] p-4">
      <div className="mb-4 flex flex-col space-y-2">
        <img
          src="https://picsum.photos/300/300"
          alt="Article 1"
          className="h-[300px] w-full object-cover"
        />
        <h2 className="font-bold text-2xl">Article 1</h2>
        <p className="line-clamp-3 h-[80px]">Some text about article 1</p>
      </div>
      <Link to="/" className="font-bold text-base">
        READ MORE
        <ArrowLongRightIcon className="h-6 w-6 inline-block ml-2" />
      </Link>
    </div>
  );
}

export default ArticleCard;
