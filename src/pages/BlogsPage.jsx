import React from "react";
import HeroSection from "../components/HeroSection";
import ArticleList from "../components/ArticleList";

function BlogsPage() {
  return (
    <>
      <HeroSection title="Read best articles from us. " handsImage="three" />
      <ArticleList />
    </>
  );
}

export default BlogsPage;
