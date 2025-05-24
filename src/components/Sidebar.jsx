import React from "react";
import { RxCross2 } from "react-icons/rx";
import { IoInformationCircleOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { HiUserAdd } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AiOutlineInbox } from "react-icons/ai";
import { BiHomeSmile } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { useCarContext } from "./context/CarContext";

const Sidebar = () => {
  const { state, UpdateSidebarValue } = useCarContext();
  const { isSidebarOpen } = state;

  return (
    <div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-500/75 z-[40]"
          onClick={() => UpdateSidebarValue(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed left-0 top-0 z-[50] h-full max-w-[20rem] w-full transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white flex flex-col p-2 text-indigo-800 shadow-xl shadow-blue-gray-900/5`}
      >
        <div className="flex items-center justify-between p-2 mb-2 h-14">
          <div className="h-12 w-[15vw] flex justify-start items-center p-1">
            <h1
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-800 bg-clip-text text-transparent text-2xl font-extrabold uppercase"
              style={{ fontFamily: "Unbounded" }}
            >
              Shiftly
            </h1>
          </div>

          <button
            onClick={() => UpdateSidebarValue(false)}
            className="text-2xl text-gray-600"
            aria-label="Close sidebar"
          >
            <RxCross2 />
          </button>
        </div>

        <hr className="text-gray-400" />

        <nav className="flex flex-col gap-1 p-2 font-sans text-base font-normal text-gray-800">
          <NavLink to="/" onClick={() => UpdateSidebarValue(false)}>
            <div className="flex items-center w-full p-3 rounded-lg hover:bg-indigo-100 hover:text-indigo-900">
              <BiHomeSmile className="mr-4" />
              Home
            </div>
          </NavLink>

          <NavLink to="/listing" onClick={() => UpdateSidebarValue(false)}>
            <div className="flex items-center w-full p-3 rounded-lg hover:bg-indigo-100 hover:text-indigo-900">
              <AiOutlineInbox className="mr-4" />
              Listing
            </div>
          </NavLink>

          <NavLink to="/blog" onClick={() => UpdateSidebarValue(false)}>
            <div className="flex items-center w-full p-3 rounded-lg hover:bg-indigo-100 hover:text-indigo-900">
              <IoInformationCircleOutline className="mr-4" />
              Blog Pages
            </div>
          </NavLink>

          <NavLink to="/about" onClick={() => UpdateSidebarValue(false)}>
            <div className="flex items-center w-full p-3 rounded-lg hover:bg-indigo-100 hover:text-indigo-900">
              <HiOutlineShoppingBag className="mr-4" />
              About
            </div>
          </NavLink>

          <NavLink to="/contact" onClick={() => UpdateSidebarValue(false)}>
            <div className="flex items-center w-full p-3 rounded-lg hover:bg-indigo-100 hover:text-indigo-900">
              <HiMiniUserGroup className="mr-4" />
              Contact
            </div>
          </NavLink>
        </nav>

        <div className="p-2 mt-auto flex gap-3 border-t border-gray-200 pt-4">
          <NavLink to="/login" className="flex-1">
            <button className="w-full px-4 py-2 flex items-center justify-center border border-gray-400 text-gray-800 rounded hover:bg-indigo-600 hover:text-white transition">
              <VscAccount className="mr-2" />
              Sign In
            </button>
          </NavLink>
          <NavLink to="/signup" className="flex-1">
            <button className="w-full px-4 py-2 flex items-center justify-center border border-gray-400 text-gray-800 rounded hover:bg-indigo-600 hover:text-white transition">
              <HiUserAdd className="mr-2" />
              Sign Up
            </button>
          </NavLink>
        </div>

        <div className="p-2 mt-4 text-sm text-center text-gray-500 border-t border-gray-200">
          <p>
            &#169; {new Date().getFullYear()} Developed by <br /> Abhishek
            Vishwakarma
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
