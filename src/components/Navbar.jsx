import React from "react";
import Logo from "../assets/logo.png";
import { Bars2Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
                  
  return (
    <nav className="fixed w-full z-10 bg-transparent flex justify-between items-center py-2 px-4">
      <img src={Logo} alt="logo" className="h-[28px]" />
      <button onClick={toggleMenu} className="bg-white p-1">
        <Bars2Icon className="size-6 text-black-500" />
      </button>
      {isOpenMenu && (
        <ul className="absolute right-12 top-10 space-y-2 py-1 text-center bg-white shadow-md w-36 border-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/our-works">Our Works</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
