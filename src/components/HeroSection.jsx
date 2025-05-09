import React, { useState, useEffect } from "react";

const rotatingWords = [
  "Performance",
  "Comfort",
  "Elegance",
  "Power",
  "Precision",
];

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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentWord = rotatingWords[currentWordIndex];

  return (
    <section className="relative bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between max-w-7xl mx-auto px-6 py-6">
        <div className="text-2xl font-bold tracking-wide uppercase text-white">
          LuxDrive
        </div>
        <ul className="hidden md:flex gap-10 text-sm uppercase tracking-widest text-gray-300">
          {["Models", "Features", "Gallery", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 brightness-75"
          style={{
            backgroundImage:
              "url('/193375-3840x2160-desktop-4k-bugatti-background-photo.jpg')",
          }}
        ></div>

        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center max-w-2xl sm:max-w-3xl px-4 mx-auto">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif uppercase font-semibold tracking-wide leading-snug text-white drop-shadow-lg transition-all duration-500 ease-in-out"
            style={{ fontFamily: "Unbounded" }}
          >
            Experience True
            <br />
            <span
              className={`inline-block transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              } text-yellow-400`}
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
      </div>
    </section>
  );
};

export default HeroSection;
