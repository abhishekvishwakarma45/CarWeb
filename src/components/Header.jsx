import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex justify-around items-center w-full h-20 px-4 lg:px-8">
      <div className="flex justify-start items-center w-1/3">
        <img
          className="object-contain h-16 lg:h-20"
          src="https://res.cloudinary.com/dqktbs8zx/image/upload/v1744024894/logo-removebg-preview_ctd0jf.png"
          alt="Logo"
        />
      </div>
      <div className="hidden lg:flex items-center justify-center capitalise space-x-6 w-1/3">
        <p className=" text-sm cursor-pointer">Home</p>
        <p className=" text-sm cursor-pointer">Products</p>
        <p className=" text-sm cursor-pointer">About</p>
        <p className=" text-sm cursor-pointer">Contact</p>
      </div>

      <div className="flex items-center justify-end w-1/3 pr-2 space-x-4">
        {/* <form className="items-center hidden lg:flex">
          <div className="border flex items-center rounded-sm overflow-hidden">
            <input
              type="text"
              name="search"
              className="px-3 py-2 outline-none text-gray-700"
              placeholder="Search anything..."
            />
            <button type="submit" className="px-4 py-2 text-2xl">
              <IoIosSearch />
            </button>
          </div>
        </form> */}

        <div className="hidden lg:grid place-content-center border border-gray-500 py-2 px-3 rounded-4xl">
          <button className="text-sm mx-1  text-black">
            <p className="flex items-center">
              <FaUser className="mx-2" /> Sign In
            </p>
          </button>
        </div>

        <button className="inline-block p-2 text-2xl font-bold lg:hidden">
          <RiMenu3Fill />
        </button>
      </div>
    </div>
  );
};

export default Header;
