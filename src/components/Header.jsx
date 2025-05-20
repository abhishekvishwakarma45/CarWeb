import React from "react";

import { VscAccount } from "react-icons/vsc";
import { TbMenu4 } from "react-icons/tb";
const Header = () => {
  return (
    <header className="w-full px-6 py-4 absolute z-40 top-0 bg-transparent text-black flex justify-between items-center transition duration-300">
      <div
        className="flex text-white text-lg md:text-2xl uppercase font-extrabold items-center"
        style={{ fontFamily: "Unbounded" }}
      >
        <h1 className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Shiftly
        </h1>
      </div>

      <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-widest">
        <span className="cursor-pointer text-amber-500 transition">Home</span>
        <span className="cursor-pointer text-amber-500 transition">
          Listing
        </span>
        <span className="cursor-pointer text-amber-500 transition">
          Blog Pages
        </span>
        <span className="cursor-pointer text-amber-500 transition">About</span>
        <span className="cursor-pointer text-amber-500 transition">
          Contact
        </span>
        <button className="ml-4 px-5 py-2 flex justify-center items-center text-amber-500 rounded border border-amber-500 transition-all duration-300">
          <VscAccount className="mx-2" /> Sign In
        </button>
      </nav>

      <button className="md:hidden text-3xl text-white">
        <TbMenu4 />
      </button>
    </header>
  );
};

export default Header;
