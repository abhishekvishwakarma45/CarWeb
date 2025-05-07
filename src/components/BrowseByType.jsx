// BrowseByType.jsx

import React from "react";

const types = [
  { name: "Saden", type: "city", image: "/Car Types/sedan.png" },
  { name: "SUV", type: "Off-road", image: "/Car Types/suv.png" },
  { name: "Coupe", type: "city", image: "/Car Types/car.png" },
  { name: "EV", type: "city", image: "/Car Types/electric-car.png" },
  { name: "Truck", type: "mountain", image: "/Car Types/truck.png" },
  {
    name: "Convertible ",
    type: "city",
    image: "/Car Types/Convertible.webp",
  },
];

const BrowseByType = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Browse by Type</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {types.map((item) => (
          <div
            key={item.type}
            className="bg-white rounded-lg border border-gray-300  hover:shadow-lg transition-all duration-300 p-1 flex flex-col items-center text-center cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-contain mb-3"
            />
            <p className="text-sm font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByType;
