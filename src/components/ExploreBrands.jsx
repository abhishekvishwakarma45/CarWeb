import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ExploreBrands = () => {
  const brands = [
    { name: "BMW", img: "/Brands/bmw-logo-png_seeklogo-170616.png" },
    { name: "Land Rover", img: "/Brands/land-rover.png" },
    { name: "Porshe", img: "/Brands/porshe.png" },
    {
      name: "Bugatti",
      img: "/Brands/bugatti.png",
    },
    {
      name: "Mercedes-Benz",
      img: "/Brands/mercedes-benz-logo-png_seeklogo-91081.png",
    },
    { name: "Jaguar", img: "/Brands/jaguar.png" },
    { name: "Tesla", img: "/Brands/tesla-logo-png_seeklogo-329764.png" },
    { name: "Volvo", img: "/Brands/volvo-logo-png_seeklogo-150596.png" },
  ];

  return (
    <section className="w-full h-auto mt-35 my-20 px-4 md:px-20 lg:px-30">
      <div className="flex justify-center border border-gray-400 items-center">
        <div className="relative ">
          <div className="absolute left-1/2 -translate-x-1/2 -top-7 font-bold bg-white rounded-full py-4 px-6 border border-gray-400 text-center">
            <h1 className="text-nowrap text-sm md:text-xl capitalize">
              Explore our premium brands
            </h1>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        className="mySwiper mt-16"
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="h-[20vh] grid w-auto place-items-center mt-15 bg-white border border-gray-300 rounded-xl shadow-md p-4">
              <div className="w-19 h-19 flex items-center justify-center">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="mt-2 text-center font-semibold text-lg text-gray-800">
                {brand.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ExploreBrands;
