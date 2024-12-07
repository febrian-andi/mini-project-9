import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { Bars2Icon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    console.log("toggleMenu");
    setIsOpenMenu(!isOpenMenu);
  };

  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-10 bg-transparent flex justify-between items-center py-3 px-4 ${isScrolled && "bg-yellow-primary shadow-md"}`}
    >
      <img src={Logo} alt="logo" className="h-[28px]" />
      <button onClick={toggleMenu} className="bg-white p-1">
        <Bars2Icon className="size-6 text-black-500" />
      </button>
      {isOpenMenu && (
        <ul className="absolute right-12 top-10 space-y-2 py-1 text-center bg-white shadow-md w-36 border-2">
          <li>
            <Link onClick={() => setIsOpenMenu(false)} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpenMenu(false)} to="/our-works">
              Our Works
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpenMenu(false)} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpenMenu(false)} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpenMenu(false)} to="/blogs">
              Blogs
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
