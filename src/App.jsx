import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OurWorksPage from "./pages/OurWorksPage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import Blogs from "./pages/BlogsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogDetailPage from "./pages/BlogDetailPage";
import OurWorksDetailPage from "./pages/OurWorksDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import Banner from "./components/Banner";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-works" element={<OurWorksPage />} />
          <Route path="/our-works/detail" element={<OurWorksDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Banner />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
