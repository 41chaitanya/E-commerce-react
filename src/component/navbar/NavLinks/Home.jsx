import React from "react";
import SearchProductDiv from "../../searchYourProduct/SearchProductDiv";
import CategoriesContent from "../../content/CategoriesContent";
import HowItWork from "../../content/HowItWork";
import LatestVendor from "../../content/LatestVendor";
import FeaturedItems from "../../content/FeaturedItems";

const Home = () => {
  return (
    <>
      <SearchProductDiv />
      <CategoriesContent/>
      <HowItWork/>
      <LatestVendor/>
      <FeaturedItems/>

    </>
  );
};

export default Home;
