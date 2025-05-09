import React, { useState, useRef, useEffect } from "react";
import { useCartContext } from "./context/CarContext";
import CarTemplate from "./CarTemplate";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MostSearchedCar = () => {
  const [selectType, setSelectType] = useState();
  const { state, getUniqueValues } = useCartContext();
  const { carInventory } = state;
  const typeValue = getUniqueValues("type");

  const filteredInventory = selectType
    ? carInventory.filter((car) => car.type === selectType)
    : carInventory;

  const chunkArray = (array, size) =>
    Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
      array.slice(i * size, i * size + size)
    );

  const carChunks = chunkArray(filteredInventory, 8);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 my-20 bg-white">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-800">
          Explore the Most Searched Vehicles
        </h1>

        <div className="mt-10 flex justify-center flex-wrap gap-3">
          <button
            className={`px-6 py-2 rounded-sm text-sm font-medium transition-all duration-300 ${
              !selectType
                ? "bg-indigo-700 text-white shadow-md scale-105"
                : "border border-gray-400 text-gray-700 hover:bg-blue-100"
            }`}
            onClick={() => setSelectType(undefined)}
          >
            All Categories
          </button>

          {typeValue.map((curr, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-sm text-sm font-medium transition-all duration-300 ${
                selectType === curr
                  ? "bg-indigo-700 text-white shadow-md scale-105"
                  : "border border-gray-400 text-gray-700 hover:bg-blue-100"
              }`}
              onClick={() => setSelectType(curr)}
            >
              {curr}
            </button>
          ))}
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        spaceBetween={20}
        slidesPerView={1}
      >
        {carChunks.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-wrap justify-center gap-6 mt-6 px-2">
              {group.map((car, idx) => (
                <CarTemplate key={idx} curr={car} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-4 mt-8">
        <button
          ref={prevRef}
          className="p-3 bg-gray-200 hover:bg-gray-300 text-lg rounded-full transition"
        >
          <IoIosArrowBack />
        </button>
        <button
          ref={nextRef}
          className="p-3 bg-gray-200 hover:bg-gray-300 text-lg rounded-full transition"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
};

export default MostSearchedCar;
