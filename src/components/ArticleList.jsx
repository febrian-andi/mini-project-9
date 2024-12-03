import React from "react";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";

function ArticleList({ page = "" }) {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mb-12">
        <h1
          className={`text-3xl font-bold ${page === "home" ? "md:pl-32" : ""}`}
        >
          Check out our interesting articles
        </h1>
        {page === "home" && (
          <Link to="/blogs" className="font-bold text-base underline pr-4">
            SEE ALL
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-12 gap-y-6">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      {page !== "home" && (
        <div className="flex justify-center mt-12">
          <button className="bg-black text-white font-bold py-2 px-8">
            Load More
          </button>
        </div>
      )}
    </section>
  );
}

export default ArticleList;
