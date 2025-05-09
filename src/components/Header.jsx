import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 absolute z-40 top-0 text-white bg-black/30 backdrop-blur-md flex justify-between items-center transition duration-300">
      <div className="flex items-center">
        <img
          src="https://res.cloudinary.com/dqktbs8zx/image/upload/v1744024894/logo-removebg-preview_ctd0jf.png"
          alt="Logo"
          className="h-12 w-auto object-contain"
        />
      </div>

      <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-widest">
        <span className="cursor-pointer hover:text-yellow-400 transition">
          Home
        </span>
        <span className="cursor-pointer hover:text-yellow-400 transition">
          Listing
        </span>
        <span className="cursor-pointer hover:text-yellow-400 transition">
          Blog Pages
        </span>
        <span className="cursor-pointer hover:text-yellow-400 transition">
          About
        </span>
        <span className="cursor-pointer hover:text-yellow-400 transition">
          Contact
        </span>
        <button className="ml-4 px-5 py-2 flex justify-center items-center text-white rounded border border-white hover:bg-white hover:text-black transition-all duration-300">
          <VscAccount className="mx-2" /> Sign In
        </button>
      </nav>

      <button className="md:hidden text-4xl text-white">
        <RiMenu3Fill />
      </button>
    </header>
  );
};

export default Header;
