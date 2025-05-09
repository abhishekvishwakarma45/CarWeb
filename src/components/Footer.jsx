import React from "react";
import { MdCall, MdMailOutline } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter, FaFacebook, FaGoogle } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-white mt-20 text-black">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-20">
        <hr className="text-gray-400" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm py-10 border-b border-gray-300">
          <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl font-bold mb-3">AutoLux</h2>
            <p className="text-gray-600">
              Discover the best cars, unbeatable deals, and unmatched service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="">
                <a href="#" className="hover:text-indigo-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-700">
                  Inventory
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-700">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-700">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="#" className="hover:text-indigo-700">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-700">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-700">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-700">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="flex items-center gap-2 text-gray-700 mb-2">
              <MdCall /> <a href="tel:+917385097588">(+91) 73850 97588</a>
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <MdMailOutline />{" "}
              <a href="mailto:info@autolux.com">info@autolux.com</a>
            </p>
          </div>
        </div>

        <div className="py-2">
          <div className="bg-white p-8 sm:p-10 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2 text-indigo-700">
              Stay Updated with AutoLux
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Subscribe to our newsletter and never miss the latest offers,
              vehicle launches, and auto news.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:w-2/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700"
              />
              <button className="bg-indigo-700 text-white px-6 py-3 rounded-md hover:bg-indigo-800 font-semibold text-sm uppercase">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 pb-10 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 border-t border-gray-300">
          <p>&copy; 2025 AutoLux. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0 text-xl">
            <a href="#" className="hover:text-indigo-700">
              <FaGoogle />
            </a>
            <a href="#" className="hover:text-indigo-700">
              <IoLogoInstagram />
            </a>
            <a href="#" className="hover:text-indigo-700">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-indigo-700">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
