import React from "react";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { useFetchData } from "../hooks/useFetchData";

function ArticleList({ page = "" }) {
  const { data: articles, error, loading } = useFetchData("/blogs");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!articles || !articles.data.length === 0) return <p>No data found</p>;

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
        {articles.data.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
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
