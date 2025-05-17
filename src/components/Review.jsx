import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const reviews = [
  {
    name: "Rahul Sharma",
    review:
      "The new SUV I purchased through this site is incredible—smooth ride, great mileage, and unbeatable value.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Priya Verma",
    review:
      "I found my dream sports car here. The buying process was seamless and the customer support was excellent!",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "Amit Singh",
    review:
      "Excellent selection of vehicles. I got a certified pre-owned sedan that runs like new. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "Sneha Iyer",
    review:
      "I was impressed with how fast I could compare models and get the best deal on a hybrid. Love the car!",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    name: "Karan Mehta",
    review:
      "Got a luxury car at a great price. The quality, service, and delivery experience exceeded my expectations.",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    name: "Ananya Reddy",
    review:
      "This platform made it so easy to find my perfect car. The images, specs, and finance options were very clear.",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
];

export default function Review() {
  return (
    <section className="py-20 px-3 bg-white">
      <div className="px-4 mx-auto text-center max-w-7xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-800">
          What Our Customers Are Saying
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          (Real experiences from real drivers)
        </p>
      </div>

      <div className="relative mt-16 w-full max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide
              key={idx}
              className="bg-[#EBF7FE] rounded-xl shadow-md p-6 text-left"
            >
              <div className="flex items-center justify-between pb-2 mb-4 border-b border-gray-200">
                <div className="text-lg font-semibold text-gray-900">
                  {review.name}
                </div>
                <img
                  src={review.image}
                  alt={review.name}
                  className="object-cover w-12 h-12 border rounded-full"
                />
              </div>
              <p className="text-sm italic text-gray-700">“{review.review}”</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
