import React from "react";

const reviews = [
  {
    name: "James Walker",
    review:
      "The new SUV I purchased through this site is incredible—smooth ride, great mileage, and unbeatable value.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sophia Martinez",
    review:
      "I found my dream sports car here. The buying process was seamless and the customer support was excellent!",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Liam Thompson",
    review:
      "Excellent selection of vehicles. I got a certified pre-owned sedan that runs like new. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    name: "Ava Patel",
    review:
      "I was impressed with how fast I could compare models and get the best deal on a hybrid. Love the car!",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    name: "Ethan Chen",
    review:
      "Got a luxury car at a great price. The quality, service, and delivery experience exceeded my expectations.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Maya Johnson",
    review:
      "This platform made it so easy to find my perfect car. The images, specs, and finance options were very clear.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
];

export default function Review() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
          What Our Customers Are Saying
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          (Real experiences from real drivers)
        </p>
      </div>

      <div className="relative mt-16 overflow-hidden">
        <div className="testimonial-slider flex gap-6 whitespace-nowrap items-stretch">
          {[...reviews, ...reviews].map((review, idx) => (
            <div
              key={idx}
              className="w-full sm:w-64 md:w-72 lg:w-80 bg-white rounded-xl shadow-md p-6 my-4 shrink-0 flex flex-col h-full min-h-[250px]"
            >
              <div className="flex h-auto justify-between items-center mb-4 border-b pb-2 border-gray-200">
                <div className="font-semibold text-lg text-gray-900">
                  {review.name}
                </div>
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover border"
                />
              </div>
              <p className="text-gray-700 text-wrap text-sm">
                “{review.review}”
              </p>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="testimonial-slider2 flex gap-6 whitespace-nowrap items-stretch">
          {[...reviews, ...reviews].map((review, idx) => (
            <div
              key={idx}
              className="w-full sm:w-64 md:w-72 lg:w-80 bg-white rounded-xl shadow-lg p-6 my-4 shrink-0 flex flex-col h-full min-h-[250px]"
            >
              <div className="flex h-auto justify-between items-center mb-4 border-b pb-2 border-gray-200">
                <div className="font-semibold text-lg text-gray-900">
                  {review.name}
                </div>
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover border"
                />
              </div>
              <p className="text-gray-700 text-wrap text-sm">
                “{review.review}”
              </p>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 h-full w-15 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-15 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
