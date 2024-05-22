import React, { useState } from "react";
import { Link } from "react-scroll";

function Header() {
  // State to manage the menu (open/closed)
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state (open/close)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-white text-black w-full px-10 sm:px-20 justify-between flex fixed z-10 items-center py-5">
      <div role="link" className="flex justify-start items-center">
        {/* Logo */}
        <img
          src="/assets/logo/logo.svg"
          alt="logo"
          className="w-52 cursor-pointer"
        />
      </div>
      <div className="hidden lg:flex space-x-4 uppercase">
        {/* Navigation Links */}
        <Link
          to="banner"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-400"
        >
          Düftes
        </Link>
        <Link
          to="maison-francis"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-400"
        >
          Über uns
        </Link>
        <Link
          to="section3"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-blue-400"
        >
          Blog
        </Link>
      </div>
      <div className="hidden lg:flex flex-row w-52 justify-end">
        {/* User and Cart Icons */}
        <img
          src="/assets/icons/user.svg"
          alt="user"
          className="w-5 h-5 cursor-pointer"
        />
        <img
          src="/assets/icons/cart.svg"
          alt="cart"
          className="w-5 h-5 cursor-pointer ml-3"
        />
      </div>
      {/* Hamburger Menu Button */}
      <button
        className="lg:hidden text-3xl text-black focus:outline-none"
        onClick={toggleMenu}
      >
        ☰
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 pt-5 h-full w-1/2 max-w-xs bg-white shadow-lg transform transition-transform lg:hidden">
          {/* Close Button */}
          <button
            className="text-2xl text-black font-bold px-4 focus:outline-none self-end"
            onClick={toggleMenu}
          >
            ✕
          </button>
          <div className="flex flex-col items-start pt-5 px-6 space-y-6 uppercase">
            {/* Mobile Navigation Links */}
            <Link
              to="banner"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
              onClick={toggleMenu}
            >
              Düftes
            </Link>
            <Link
              to="maison-francis"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
              onClick={toggleMenu}
            >
              Über uns
            </Link>
            <Link
              to="section3"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <div className="flex flex-row space-x-4 mt-4">
              {/* Mobile User and Cart Icons */}
              <img
                src="/assets/icons/user.svg"
                alt="user"
                className="w-5 h-5 cursor-pointer"
              />
              <img
                src="/assets/icons/cart.svg"
                alt="cart"
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
      {/* Clickable Overlay to Close Menu */}
      <div
        onClick={() => {
          closeMenu();
        }}
        className="w-screen h-screen  fixed top-0 -z-10"
      />
    </div>
  );
}

export default Header;
