import React from "react";
import AboutUs from "../../components/AboutUs";
import MissionVison from "../../components/MissionVison";
import AdPortfolio from "../../components/ad-portfolio/AdPortfolio";
import { useParams } from "react-router-dom";
import WhyChoose from "../../components/WhyChoose";

const About = () => {
  const { status } = useParams();
  console.log(status);
  return (
    <>
      <AboutUs />
      <MissionVison />
      {status === "data" && <WhyChoose status={status} />}
      <AdPortfolio status="aboutus" />
    </>
  );
};

export default About;
