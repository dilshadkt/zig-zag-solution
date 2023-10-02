import React from "react";
import AboutUs from "../../components/AboutUs";
import MissionVison from "../../components/MissionVison";
import AdPortfolio from "../../components/ad-portfolio/AdPortfolio";

const About = () => {
  return (
    <>
      <AboutUs />
      <MissionVison />
      <AdPortfolio status="aboutus" />
    </>
  );
};

export default About;
