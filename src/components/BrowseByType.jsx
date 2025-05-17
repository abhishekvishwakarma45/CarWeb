import React from "react";

const types = [
  { name: "Sedan", type: "City", image: "/Car Types/sedan.png" },
  { name: "SUV", type: "Off-road", image: "/Car Types/suv.png" },
  { name: "Coupe", type: "City", image: "/Car Types/car.png" },
  { name: "EV", type: "Electric", image: "/Car Types/electric-car.png" },
  { name: "Truck", type: "Utility", image: "/Car Types/truck.png" },
  {
    name: "Convertible",
    type: "Leisure",
    image: "/Car Types/Convertible.webp",
  },
];

const BrowseByType = () => {
  return (
    <div className="px-4 py-10 mx-auto max-w-7xl">
      <div className="mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-2">
          Browse by Car Type
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Explore a variety of cars tailored to your needs, whether you're
          looking for utility, city driving, or electric options.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {types.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 text-center transition-all duration-300 bg-white border border-gray-200 shadow-sm cursor-pointer group rounded-lg hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex items-center justify-center w-20 h-20 mb-3 transition-transform bg-gray-100 rounded-full group-hover:scale-105">
              <img
                src={item.image}
                alt={item.name}
                className="object-contain w-10 h-10"
              />
            </div>
            <p className="text-base sm:text-lg font-medium text-gray-800">
              {item.name}
            </p>
            <span className="text-xs sm:text-sm text-gray-500">
              {item.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByType;
