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
      <h2 className="mb-10 text-3xl font-bold text-left text-gray-800">
        Browse by Type
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {types.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 text-center transition-all duration-300 bg-white border border-gray-200 shadow-sm cursor-pointer group rounded-xl hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex items-center justify-center w-20 h-20 mb-4 transition-transform bg-gray-100 rounded-full group-hover:scale-110">
              <img
                src={item.image}
                alt={item.name}
                className="object-contain w-10 h-10"
              />
            </div>
            <p className="text-sm font-semibold text-gray-700">{item.name}</p>
            <span className="text-xs text-gray-400">{item.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByType;
