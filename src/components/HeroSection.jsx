import React, { useState, useEffect } from "react";

const rotatingWords = ["Comfort", "Elegance", "Power", "Precision", "Thrill"];

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setFade(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentWord = rotatingWords[currentWordIndex];

  return (
    <section className="relative bg-black text-white font-sans h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 brightness-75 z-0"
        style={{
          backgroundImage:
            "url('/193375-3840x2160-desktop-4k-bugatti-background-photo.jpg')",
        }}
      ></div>

      <div className="absolute inset-0 bg-black/40 backdrop-blur-md z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center max-w-2xl sm:max-w-3xl px-4 mx-auto">
        <h1 className="text-center">
          <span
            className="text-base sm:text-lg md:text-xl text-white font-light uppercase tracking-widest block mb-2"
            style={{ fontFamily: "Unbounded" }}
          >
            Experience True
          </span>
          <span
            className={`inline-block transition-opacity text-4xl sm:text-5xl md:text-6xl font-bold duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            } text-yellow-400`}
            style={{ fontFamily: "Unbounded" }}
          >
            {currentWord}
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 tracking-wide leading-relaxed text-center">
          Discover a new era of automotive luxury — where innovation, design,
          and performance unite to elevate every journey.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-5 text-sm font-semibold uppercase tracking-widest">
          <a
            href="#"
            className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-white to-gray-200 text-black shadow-md hover:shadow-lg hover:from-gray-100 hover:to-white transition-all duration-300"
          >
            Explore Models
          </a>
          <a
            href="#"
            className="px-6 py-2 sm:px-8 sm:py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Book a Test Drive
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        {/* <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L80,53.3C160,75,320,117,480,149.3C640,181,800,203,960,181.3C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,128L80,149.3C160,171,320,213,480,224C640,235,800,213,960,181.3C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
