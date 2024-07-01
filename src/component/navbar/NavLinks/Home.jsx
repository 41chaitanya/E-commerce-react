import React from "react";
import SearchProductDiv from "../../content/landingPageContent/SearchProductDiv";
import CategoriesContent from "../../content/landingPageContent/CategoriesContent";
import HowItWork from "../../content/landingPageContent/HowItWork";
import LatestVendor from "../../content/landingPageContent/LatestVendor";
import FeaturedItems from "../../content/landingPageContent/FeaturedItems";
import Footer from "../../content/landingPageContent/Footer";

const Home = () => {
  return (
    <>
      <SearchProductDiv />
      <CategoriesContent />
      <HowItWork />
      <LatestVendor />
      <FeaturedItems />
      <Footer />
    </>
  );
};

export default Home;
