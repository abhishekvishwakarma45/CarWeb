import React, { Fragment } from "react";
import Header from "./components/Header.jsx";
import ChooseStyle from "./components/ChooseStyle.jsx";
import CarTemplate from "./components/CarTemplate.jsx";
import MostSearchedCar from "./components/MostSearchedCar.jsx";
import ExploreBrands from "./components/ExploreBrands.jsx";
import WhyChooseSection from "./components/WhyChooseSection.jsx";
import { Footer } from "./components/Footer.jsx";
import EmiCalculator from "./components/EMICalculator.jsx";
import Review from "./components/Review.jsx";
import Parts from "./components/SpareParts.jsx";
import BrowseByType from "./components/BrowseByType.jsx";
import CallToAction from "./components/CallToAction.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HeroSection from "./components/HeroSection.jsx";

function App() {
  return (
    <Fragment>
      <HeroSection />
      <BrowseByType />
      <MostSearchedCar />
      <ExploreBrands />
      <CallToAction />
      <Review />
      <WhyChooseSection />
      <Parts />
      <Footer />
    </Fragment>
  );
}

export default App;
