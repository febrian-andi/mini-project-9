import React from "react";
import HeroSection from "../components/HeroSection";
import Detail from "../components/Detail";

function BlogDetailPage() {
  return (
    <>
      <HeroSection title="We write article with love." handsImage="three" />
      <Detail urlApi="blogs"/>
    </>
  );
}

export default BlogDetailPage;
