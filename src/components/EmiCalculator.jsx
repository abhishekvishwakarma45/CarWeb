import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const EmiCalculator = () => {
  return (
    <Fragment>
      <div className="w-full px-4 py-10 mx-auto md:px-10 lg:px-20 max-w-7xl">
        <div className="grid items-start grid-cols-1 gap-8 p-4 lg:grid-cols-2">
          <div className="hidden md:block">
            <img
              src="/Calculator-pana.png"
              alt="EMI Illustration"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <form className="p-4 space-y-5 bg-white rounded-xl">
              <div className="mb-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
                  EMI Calculator
                </h2>
                <p className="mt-2 text-gray-500">
                  Calculate your monthly loan installment.
                </p>
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Loan Amount
                </label>
                <input
                  type="number"
                  placeholder="Enter loan amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Interest Rate (% per annum)
                </label>
                <input
                  type="number"
                  placeholder="Enter interest rate"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Tenure (in months)
                </label>
                <input
                  type="number"
                  placeholder="Enter tenure in months"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 font-bold text-black uppercase transition duration-300 rounded-md bg-amber-300 hover:bg-amber-200"
              >
                Calculate
              </button>

              <div className="mt-4 text-center">
                <p className="text-xl font-semibold text-indigo-600">
                  Estimated EMI: ₹0.00
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EmiCalculator;
