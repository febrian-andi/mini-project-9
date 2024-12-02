import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import OurWorks from './pages/OurWorks'
import About from './pages/About'
import Contact from './pages/ContactUs'
import Blogs from './pages/Blogs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-works" element={<OurWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
