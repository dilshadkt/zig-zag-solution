import React from "react";
import AboutUs from "../../components/AboutUs";
import MissionVison from "../../components/MissionVison";
import AdPortfolio from "../../components/ad-portfolio/AdPortfolio";
import { useParams } from "react-router-dom";
import WhyChoose from "../../components/WhyChoose";
import OurExperts from "../../components/Our-experts/OurExperts";

const About = () => {
  const { status } = useParams();
  console.log(status);
  return (
    <>
      <AboutUs />
      <MissionVison />
      <OurExperts />
      {status === "data" && <WhyChoose status={status} />}
      <AdPortfolio status="aboutus" />
    </>
  );
};

export default About;
