import React, { Fragment } from "react";
import Header from "./Header";
import BrowseByType from "./BrowseByType";
import MostSearchedCar from "./MostSearchedCar";
import ExploreBrands from "./ExploreBrands";
import CallToAction from "./CallToAction";
import Review from "./Review";
import WhyChooseSection from "./WhyChooseSection";
import Parts from "./SpareParts";
import { Footer } from "./Footer";
import HeroSection from "./HeroSection";
// import { Login } from "./Login";
const Home = () => {
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
      {/* <Login /> */}
    </Fragment>
  );
};

export default Home;
