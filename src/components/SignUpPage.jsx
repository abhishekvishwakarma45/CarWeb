import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";

const SignUpPage = () => {
  return (
    <Fragment>
      <div className="min-h-screen mt-10 flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 mx-auto">
          <div className="flex justify-center">
            <img
              src="/signup.png"
              alt="Signup Illustration"
              className="max-w-full h-auto object-contain"
            />
          </div>

          <div className="w-full bg-white p-8 sm:p-10 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Create Your Account
            </h2>
            <p className="text-sm text-gray-500 text-center mb-6">
              Join us to unlock exclusive features and manage your profile
              easily.
            </p>

            <div className="flex justify-center gap-4 mb-6">
              <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition">
                <FcGoogle className="text-lg" />
                Google
              </button>
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                <FaFacebookF className="text-sm" />
                Facebook
              </button>
              <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition">
                <FaGithub className="text-lg" />
                GitHub
              </button>
            </div>

            <div className="my-6 flex items-center justify-between">
              <hr className="w-full border-gray-300" />
              <span className="mx-4 text-sm text-gray-400">OR</span>
              <hr className="w-full border-gray-300" />
            </div>

            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="date"
                name="birthdate"
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                name="username"
                placeholder="Email"
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
              >
                Register
              </button>

              <p className="text-center text-gray-600 text-sm mt-6">
                Already a member?{" "}
                <NavLink
                  to="/login"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Log in
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUpPage;
