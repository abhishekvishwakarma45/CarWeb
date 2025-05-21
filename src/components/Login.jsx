import React from "react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left: Illustration */}
        <div className="flex justify-center">
          <img
            src="/login.png"
            alt="Login Illustration"
            className="max-w-full h-auto object-contain"
          />
        </div>

        {/* Right: Login Form */}
        <div className="w-full bg-white p-8 sm:p-10 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Welcome Back
          </h2>

          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  defaultChecked
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded mr-2"
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
            >
              Sign In
            </button>

            <div className="my-6 flex items-center justify-between">
              <hr className="w-full border-gray-300" />
              <span className="mx-4 text-sm text-gray-400">OR</span>
              <hr className="w-full border-gray-300" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-md py-2 text-gray-700 hover:bg-gray-50 transition mb-3"
            >
              <FcGoogle className="mr-3 text-lg" /> Continue with Google
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition"
            >
              <FaFacebookF className="mr-3 text-sm" /> Continue with Facebook
            </button>

            <p className="text-center text-sm text-gray-600 mt-6">
              Don’t have an account?{" "}
              <NavLink
                to="/signup"
                className="text-blue-600 hover:underline font-medium"
              >
                Sign Up
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
