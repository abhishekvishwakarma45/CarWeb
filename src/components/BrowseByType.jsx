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
    <div className="px-4 py-16 mx-auto max-w-7xl">
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-800 mb-3">
          Browse by Car Type
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Explore a variety of cars tailored to your needs, whether you're
          looking for utility, city driving, or electric options.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {types.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 text-center transition-all duration-300 bg-white border border-gray-200 shadow-sm cursor-pointer group rounded-xl hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex items-center justify-center w-24 h-24 mb-4 transition-transform bg-gray-100 rounded-full group-hover:scale-110">
              <img
                src={item.image}
                alt={item.name}
                className="object-contain w-12 h-12"
              />
            </div>
            <p className="text-lg sm:text-xl font-semibold text-gray-800">
              {item.name}
            </p>
            <span className="text-sm sm:text-base text-gray-500">
              {item.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByType;
