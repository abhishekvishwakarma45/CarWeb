import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "Affordable Pricing",
    description:
      "No hidden fees, just honest and competitive pricing for every budget.",
    image: "/6135586.webp",
  },
  {
    title: "Trusted Dealership",
    description:
      "Join thousands of happy drivers who trust us for quality and service.",
    image: "/handshake-deal-svgrepo-com.svg",
  },
  {
    title: "Transparent Deals",
    description:
      "Everything upfront—what you see is what you pay. No gimmicks, no surprises.",
    image: "/4492512.webp",
  },
  {
    title: "Expert Maintenance",
    description:
      "Every car is inspected and tuned by certified technicians before it hits the lot.",
    image: "/maintenance-electric-car-svgrepo-com.svg",
  },
];

const WhyChooseSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="w-full px-6 my-20 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Why Choose Our Dealership?
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-600">
              We don’t just sell cars — we deliver peace of mind, premium
              service, and the best deals you’ll find anywhere.
            </p>

            <div
              ref={ref}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10"
            >
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-purple-800">
                  {inView && <CountUp end={5000} duration={2} separator="," />}+
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Happy Customers
                </p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-purple-800">
                  {inView && <CountUp end={120} duration={2} />}+
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Certified Technicians
                </p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-purple-800">
                  {inView && <CountUp end={15} duration={2} />}+
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  States Available
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {features.map(({ title, description, image }, i) => (
              <div
                key={i}
                className="flex items-start gap-4  p-3 rounded-md  hover:shadow-md transition"
              >
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src={image}
                    alt={title}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm ">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
