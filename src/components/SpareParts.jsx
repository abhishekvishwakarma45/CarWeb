import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
const Parts = () => {
  const part = [
    {
      image: "/Spare_parts/clutch disk.png",
      name: "Clutch Disc",
      description:
        "Essential component in manual transmissions, facilitating smooth power transfer between the engine.",
      brand: "Valeo",
    },
    {
      image: "/Spare_parts/Steering.webp",
      name: "Steering Wheel",
      description:
        "Ergonomically designed steering wheel for better handling and comfort, Lightweight and stylish.",
      brand: "DrivePro",
    },
    {
      image: "/Spare_parts/Alloy.png",
      name: "Alloy Wheel",
      description:
        "Lightweight and stylish wheel designed for improved vehicle performance, heat dissipation, and corrosion resistance.",
      brand: "GripX",
    },
  ];

  return (
    <section className="py-15 px-6 sm:px-6 lg:px-20 bg-white">
      <div className="my-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-800">
          Premium Automotive Spare Parts
        </h1>
        <p className="mt-2 text-gray-500 text-sm sm:text-base">
          Explore top-tier components engineered for performance and durability.
        </p>
      </div>

      <div className="flex mt-20 flex-wrap justify-center items-stretch gap-6">
        {part.map((item, index) => (
          <div
            key={index}
            className="flex flex-col max-w-sm w-full bg-white overflow-hidden border rounded-lg border-gray-300 shadow-sm"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-contain"
              />
              <span className="absolute top-2 right-2 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {item.brand}
              </span>
            </div>

            <div className="flex flex-col flex-grow p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-sm text-gray-600 mt-2 flex-grow">
                {item.description}
              </p>
              <button className="mt-4 bg-indigo-600 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-500 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className=" text-indigo-800 text-lg font-medium py-2 px-6 flex justify-center items-center hover:text-gray-800">
          View More
          <MdOutlineArrowOutward className="ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </section>
  );
};

export default Parts;
