import React from "react";

const Sale = () => {
  return (
    <section className="flex flex-col md:flex-row w-full h-[500px]">
      {/* Buy Car Section */}
      <div className="flex flex-col justify-center items-center text-center bg-gray-100 w-full md:w-1/2 px-8 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Looking to buy a car?
        </h2>
        <p className="text-gray-600 mb-6 max-w-md">
          Discover your perfect ride from thousands of listings. Reliable,
          affordable, and fast.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Sell Car Section */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <img
          src="https://source.unsplash.com/800x600/?car,sell"
          alt="Sell your car"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-2xl md:text-4xl font-semibold px-4 text-center">
            Want to sell your car?
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Sale;
