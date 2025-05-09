import React from "react";
import { MdArrowOutward } from "react-icons/md";

const CallToAction = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Your Next Car Awaits
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Explore a seamless experience for buying or selling your car with
            ease.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-4">
          <div className="relative flex flex-col group rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://wallpapercave.com/wp/wp14430470.jpg"
              alt="Buy a Car"
              className="w-full h-96 object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            <div className="absolute inset-0 flex flex-col justify-end items-start z-10 p-8 text-left text-white">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Ready to Buy Your Dream Car?
              </h3>
              <p className="text-sm md:text-base text-gray-200 mb-6">
                Browse thousands of top-rated vehicles. Affordable prices, fast
                delivery.
              </p>
              <button className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-full">
                Browse Inventory <MdArrowOutward className="ml-3" />
              </button>
            </div>
          </div>

          <div className="relative flex flex-col group rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/12984628/pexels-photo-12984628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Sell a Car"
              className="w-full h-96 object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            <div className="absolute inset-0 flex flex-col justify-end items-start z-10 p-8 text-left text-white">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Looking to Sell Your Car?
              </h3>
              <p className="text-sm md:text-base text-gray-200 mb-6">
                Sell your car in minutes and get instant offers. Simple, quick,
                and secure.
              </p>
              <button className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-green-600 rounded-full">
                Start Selling <MdArrowOutward className="ml-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
