import React, { useContext, useEffect, useState } from "react";
import { SlCalender, SlSpeedometer } from "react-icons/sl";
import { BsFuelPump } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { IoShareOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
import PriceFormatter from "./PriceFormatter";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { TfiTag } from "react-icons/tfi";
import { GoGitCompare } from "react-icons/go";
import { useCarContext } from "./context/CarContext";
import { useParams } from "react-router";
import CarTemplate from "./CarTemplate";
const ProductDetailPage = () => {
  const { id } = useParams();
  const { state, getCarByID } = useCarContext();
  const { carInventory, singleCar } = state;

  const [mainImage, setMainImage] = useState(null);

  const [fade, setFade] = useState(false);

  const changeImage = (img) => {
    setFade(true);
    setTimeout(() => {
      setMainImage(img);
      setFade(false);
    }, 250);
  };
  useEffect(() => {
    if (id) {
      getCarByID(id);
    }
  }, [id]);

  const [relatedCars, setRelatedCar] = useState([]);

  useEffect(() => {
    if (Array.isArray(carInventory) && singleCar?.type) {
      const filteredArr = carInventory.filter(
        (car) => car.type === singleCar.type && car.id !== singleCar.id
      );
      setRelatedCar(filteredArr);
    }
  }, [carInventory, singleCar]);

  useEffect(() => {
    if (Array.isArray(singleCar?.images) && singleCar.images.length > 0) {
      setMainImage(singleCar.images[0]);
    }
  }, [singleCar]);

  if (!singleCar) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center text-lg text-gray-700">
        Loading car details...
      </div>
    );
  }

  const {
    brand,
    model,
    year,
    price,
    images,
    description,
    dimensions,
    specifications,
    postedBy,
    average,
    mileage,
    colors,
    features,
  } = singleCar;

  const { length, width, height, boot_space } = dimensions || {};
  const { engine, transmission, horsepower, torque, drivetrain } =
    specifications || {};

  const { name: sellerName, location, contact, profilePic } = postedBy || {};

  return (
    <section className="w-full mt-30 px-4 py-6 md:px-15 lg:px-25">
      <nav className="mb-4 text-sm text-gray-600">
        <ol className="flex list-reset">
          <li>
            <a href="/" className="text-blue-600 ">
              Home
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <a href="/cars" className="text-blue-600 ">
              Cars
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="font-semibold text-gray-800">{model}</li>
        </ol>
      </nav>

      <div className="flex flex-col mb-3 md:flex-row md:items-center md:justify-between">
        <h1 className="mb-2 text-4xl font-bold text-gray-900">
          {brand} {model}
        </h1>
      </div>

      <div className="flex flex-wrap gap-2 mb-6 text-sm">
        <span className="px-3 py-1 text-blue-700 border rounded-full border-blue-700">
          {year}
        </span>
        <span className="px-3 py-1 text-blue-700 border rounded-full border-blue-700">
          {transmission}
        </span>
        <span className="px-3 py-1 text-blue-700 border rounded-full border-blue-700">
          {average} Avg Mileage
        </span>
        <span className="px-3 py-1 text-blue-700 border rounded-full border-blue-700">
          {drivetrain}
        </span>
      </div>

      <div className="flex flex-col lg:grid grid-cols-[80%_20%] gap-3 mt-10">
        <div className="flex-1">
          <img
            draggable="false"
            src={mainImage}
            alt="Main Car"
            className="object-cover w-full rounded-lg shadow-sm"
          />
        </div>

        <div className="grid grid-cols-4 gap-3 p-2 overflow-x-auto lg:grid-cols-1 lg:overflow-y-auto">
          {Array.isArray(images) &&
            images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                draggable="false"
                onClick={() => setMainImage(img)}
                alt={`Thumbnail ${idx + 1}`}
                className={`rounded-sm object-cover  cursor-pointer transition-all duration-300 w-full ${
                  mainImage === img
                    ? "ring-2 ring-blue-600"
                    : "hover:ring-2 hover:ring-blue-400"
                }`}
              />
            ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-x-10 my-14">
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-lg">
            <h2 className="pb-3 mb-4 text-2xl font-semibold text-gray-900 border-b border-gray-400">
              Description
            </h2>
            <p className="text-sm leading-relaxed text-gray-800">
              {description}
            </p>
          </div>

          <div className="bg-white rounded-lg">
            <h2 className="pb-3 mb-6 text-2xl font-semibold text-gray-900 border-b border-gray-400">
              Features Overview
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {["interior", "exterior", "safety", "infotainment"].map(
                (category, index) => (
                  <div key={index}>
                    <h3 className="mb-4 font-semibold text-left text-gray-800 capitalize">
                      {category}
                    </h3>
                    <ul className="text-sm text-gray-700 list-disc">
                      {Array.isArray(features?.[category]) &&
                        features[category].map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center justify-start my-2"
                          >
                            <CiCircleCheck className="mx-2 text-blue-800" />
                            {feature}
                          </li>
                        ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg">
            <h2 className="pb-3 mb-6 text-2xl font-semibold text-gray-900 border-b border-gray-400">
              Engine & Transmission
            </h2>
            <div className="grid grid-cols-1 gap-4 text-sm text-gray-800 sm:grid-cols-2">
              <p>
                <strong>Engine:</strong> {engine}
              </p>
              <p>
                <strong>Transmission:</strong> {transmission}
              </p>
              <p>
                <strong>Horsepower:</strong> {horsepower} HP
              </p>
              <p>
                <strong>Torque:</strong> {torque}
              </p>
              <p>
                <strong>Drivetrain:</strong> {drivetrain}
              </p>
              <p>
                <strong>Mileage:</strong> {mileage} km
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg">
            <h2 className="pb-3 mb-6 text-2xl font-semibold text-gray-900 border-b border-gray-400">
              Dimensions & Capacity
            </h2>
            <div className="grid grid-cols-1 gap-4 text-sm text-gray-800 sm:grid-cols-2">
              <p>
                <strong>Length:</strong> {length}
              </p>
              <p>
                <strong>Width:</strong> {width}
              </p>
              <p>
                <strong>Height:</strong> {height}
              </p>
              <p>
                <strong>Boot Space:</strong> {boot_space}
              </p>
            </div>
          </div>
        </div>

        <aside className="flex flex-col mt-10 space-y-8 bg-white p-6-full">
          <div className="p-4 border border-gray-300 rounded-lg">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              Car Pricing
            </h2>
            <div className="mb-4">
              <p className="text-2xl font-bold text-gray-900">
                <PriceFormatter price={price} />
              </p>
              <p className="mt-2 text-sm font-medium text-green-600">
                Great deal for this model!
              </p>
            </div>

            <div className="space-y-3">
              <button className="flex items-center justify-center w-full px-4 py-2 text-white transition bg-blue-600 rounded-sm hover:bg-blue-700">
                <AiOutlineSchedule className="mr-1.5" /> Schedule Test Drive
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 text-blue-600 transition border border-blue-600 rounded-sm hover:bg-blue-50">
                <MdOutlineLocalOffer className="mr-1.5" /> Make an Offer
              </button>
            </div>
          </div>

          <div className="p-4 border border-gray-300 rounded-md">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Seller Details
            </h3>
            <div className="flex items-center gap-4 mb-4">
              <img
                draggable="false"
                src={profilePic}
                alt="Seller"
                className="object-cover w-16 h-16 border border-gray-200 rounded-full shadow-sm"
              />
              <div>
                <p className="font-semibold text-gray-900 text-md">
                  {sellerName}
                </p>
                <p className="flex items-center text-sm text-gray-700">
                  <CiLocationOn className="mr-1.5" /> {location}
                </p>
                <p className="flex items-center text-sm text-gray-700">
                  <IoMdCall className="mr-1.5" /> {contact}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-2">
              <button className="flex items-center justify-center flex-1 gap-2 px-3 py-2 text-gray-800 transition border border-gray-300 rounded-md hover:bg-gray-50">
                <FiMessageSquare /> Message Dealer
              </button>
              <button className="flex items-center justify-center flex-1 gap-2 px-3 py-2 text-green-600 transition border border-green-500 rounded-md hover:bg-green-50">
                <FaWhatsapp /> WhatsApp
              </button>
            </div>
          </div>

          <div className="p-3">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <button
                className="flex items-center justify-center gap-1 px-2 py-2 text-xs text-gray-800 transition border border-gray-400 rounded-md hover:bg-blue-50"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: `${brand} ${model}`,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied to clipboard!");
                  }
                }}
              >
                <IoShareOutline /> Share
              </button>
              <button className="flex items-center justify-center gap-1 px-2 py-2 text-xs text-gray-800 transition border border-gray-400 rounded-md hover:bg-gray-50">
                <TfiTag /> Save
              </button>
            </div>
            <div className="grid grid-cols-1">
              <button className="flex items-center justify-center w-full gap-1 px-2 py-2 text-xs text-gray-800 transition border border-gray-400 rounded-md hover:bg-gray-50">
                <GoGitCompare /> Compare
              </button>
            </div>
          </div>
        </aside>
      </div>
      <div>
        {relatedCars.length > 0 &&
          (() => {
            const shuffledCars = [...relatedCars].sort(
              () => 0.5 - Math.random()
            );

            return (
              <div className="mt-14">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Related Cars
                </h2>
                <hr className="text-gray-400 mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
                  {shuffledCars.map((curr, idx) => (
                    <CarTemplate key={idx} curr={curr} />
                  ))}
                </div>
              </div>
            );
          })()}
      </div>
    </section>
  );
};

export default ProductDetailPage;
