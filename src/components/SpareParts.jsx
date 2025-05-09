import React from "react";

const Parts = () => {
  const part = [
    {
      image:
        "https://img.freepik.com/premium-photo/automobile-steel-brake-disk-with-red-calipers-pads-isolated-white-background-street-racing-car-tuning-concept_104576-246.jpg?w=826",
      name: "Brake Pad Set",
      description:
        "High-performance brake pads suitable for most sedans and SUVs.",
      brand: "AutoMaster",
    },
    {
      image: "/Spare_parts/Steering.webp",
      name: "Steering Wheel",
      description:
        "Ergonomically designed steering wheel for better handling and comfort.",
      brand: "DrivePro",
    },
    {
      image: "/Spare_parts/tyre.jpg",
      name: "All-Terrain Tyre",
      description:
        "Durable and high-grip tyre suitable for various off-road conditions.",
      brand: "GripX",
    },
  ];

  return (
    <section className="py-15 px-6 sm:px-6 lg:px-20 bg-white">
      <div className="my-8 text-left md:text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-800">
          Premium Automotive Spare Parts
        </h1>
        <p className="mt-2 text-gray-500 text-sm sm:text-base">
          Explore top-tier components engineered for performance and durability.
        </p>
      </div>

      {/* <hr className="text-gray-400 mb-8" /> */}

      <div className="flex mt-20 flex-wrap justify-center items-center gap-6">
        {part.map((item, index) => (
          <div
            key={index}
            className="max-w-sm w-full bg-white overflow-hidden transition-shadow duration-300"
          >
            <div className="relative border rounded-lg border-gray-300">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-contain"
              />
              <span className="absolute top-2 right-2 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {item.brand}
              </span>
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              <button className="mt-4 w-full bg-indigo-600 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-500 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Parts;
