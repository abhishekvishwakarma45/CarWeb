import React from "react";
import { BsFuelPump } from "react-icons/bs";
import { SlSpeedometer } from "react-icons/sl";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOutlineArrowOutward } from "react-icons/md";
import PriceFormatter from "./PriceFormatter";
import { FiTag } from "react-icons/fi";
import { PiEngine } from "react-icons/pi";
import { TfiTag } from "react-icons/tfi";
import { NavLink } from "react-router";

const CarTemplate = ({ curr }) => {
  const { year, name, images, average, specifications, price, id } = curr;

  const { transmission, fuel_type, engine } = specifications;

  return (
    <NavLink to={`/car/${id}`}>
      <div className="relative flex flex-col w-full max-w-sm overflow-hidden transition-shadow duration-300 border border-gray-300 shadow-md rounded-2xl hover:shadow-lg">
        <div className="absolute top-0 left-0 z-10 w-full px-3 py-2">
          <div className="flex items-center justify-between">
            <span className="px-3 py-0.5 text-xs text-white uppercase bg-black rounded-full">
              {year}
            </span>
            <button
              className="flex items-center bg-white justify-center w-8 h-8 rounded-full focus:outline-none"
              aria-label="Tag"
            >
              <TfiTag className="text-xl text-black" />
            </button>
          </div>
        </div>

        <div className="w-full aspect-[4/2.5]">
          <img
            src={images[0]}
            alt={`${name} car preview`}
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col justify-between flex-grow p-3 pb-2 capitalize">
          <h3 className="mb-1 text-base font-bold">{name}</h3>
          <hr className="my-2 text-gray-300" />

          <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
            {[
              { icon: <SlSpeedometer className="text-lg" />, label: average },
              { icon: <BsFuelPump className="text-lg" />, label: fuel_type },
              {
                icon: <GiGearStickPattern className="text-lg" />,
                label: transmission,
              },
              { icon: <PiEngine className="text-lg" />, label: engine },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-start h-8 rounded-md gap-x-2 "
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-2 my-3">
            <p className="text-sm font-medium">
              <PriceFormatter price={price} />
            </p>
            <button className="flex items-center px-4 py-1.5 text-xs text-black transition-all duration-200 border border-gray-300 rounded-full group hover:bg-indigo-500 hover:text-white whitespace-nowrap">
              View Details
              <MdOutlineArrowOutward className="ml-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default CarTemplate;
