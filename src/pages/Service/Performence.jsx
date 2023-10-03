import React, { useState } from "react";
import Social from "../../assets/services/performence/Continuous Optimization.jpg";
import Planning from "../../assets/services/performence/Conversion-Oriented Design.jpg";
import Community from "../../assets/services/performence/Performance Marketing Service.jpg";
import Performence from "../../assets/services/performence/Targeted Campaigns.jpg";
import Advertisment from "../../assets/services/performence/Multichannel Integration.jpg";
import Testing from "../../assets/services/performence/A,B Testing.jpg";
import Creattion from "../../assets/services/performence/Data-Driven Strategy.jpg";
import { datas } from "../../assets/services/performence/Data";
import { Container } from "./Service";
import { Wrapper } from "./Service";
import { Header } from "./Service";
import { HeaderImg } from "./Service";
import { Content } from "./Service";
import { SubHeader } from "./Service";
import { BoxContainer } from "./Service";
import { BoxItem } from "./Service";
import { Image } from "./SocialMedia";
import { BottomContaier } from "./SocialMedia";
import { Left } from "./SocialMedia";
import { Right } from "./SocialMedia";
import { RightContainer } from "./SocialMedia";
import AdPortfolio from "../../components/ad-portfolio/AdPortfolio";
import { Helmet } from "react-helmet";

const Perform = () => {
  const [content, setContent] = useState([datas[0]]);
  function changeThem(id) {
    const result = datas.filter((item) => item.id === id);
    console.log(result);
    setContent(result);
  }
  return (
    <Container>
      <Helmet>
        <title>
          Best Digital Marketing Agency in Malappuram providing complete digital
          marketing and branding services for brands across the globe.
        </title>
        <meta
          name="description"
          content={
            " As your trusted digital marketing agency in malappuram, we provide corporate branding, seo, social media, paid ads, website development services for your brand. "
          }
        />
        <meta
          name="keywords"
          content="Performance marketing, Online advertising, ROI-focused marketing, Digital advertising, Conversion optimization, Ad campaign management, Pay-per-click (PPC), Marketing analytics, Data-driven marketing, Results-driven marketing"
        />
        <meta
          property="og:title"
          content={"Grow Your Brand with Performance Marketing Expertise"}
        />
        <meta
          property="og:description"
          content={
            "Maximize your online success with our performance marketing strategies. We specialize in ROI-focused digital advertising, conversion optimization, and data-driven marketing campaigns. Experience the power of results-driven marketing today."
          }
        />
      </Helmet>
      <Wrapper>
        <HeaderImg src={Social} />
        <Header>Performance Marketing Service in Malappuram</Header>
        <Content>
          We turn data into action and strategies into success. As a growing
          digital marketing agency from Malappuram, we specialize in performance
          marketing beyond traditional methods. Our main focus areas in digital
          marketing are precise targeting, measurable outcomes, and increased
          ROI.
        </Content>
        <SubHeader>Why Performance Marketing Matters?</SubHeader>
        <Content>
          Businesses grow better when they invest in performance marketing,
          which drives measurable results. Generating tangible outcomes that
          drive your business forward. Our agency understands the dynamics of
          the business world and digital marketing, allowing us to design
          strategies that perform well.
        </Content>
        <SubHeader>Our Performance Marketing Approach</SubHeader>
        <BottomContaier>
          <Left>
            <BoxContainer>
              <BoxItem onMouseEnter={() => changeThem(1)}>
                <Image src={Planning} />
                Data-Driven Strategy
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(2)}>
                <Image src={Social} /> Targeted Campaigns
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(3)}>
                <Image src={Community} />
                Conversion-Oriented Design
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(4)}>
                {" "}
                <Image src={Advertisment} />
                Continuous Optimization
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(5)}>
                {" "}
                <Image src={Creattion} />
                Multichannel Integration
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(6)}>
                {" "}
                <Image src={Testing} />
                A/B Testing
              </BoxItem>
            </BoxContainer>
          </Left>
          <Right>
            <RightContainer>
              {content.map((item, index) => (
                <div key={index}>
                  <Image src={Performence} status="service" />
                  <SubHeader>{item.title}</SubHeader>
                  <Content section="right">{item.desc}</Content>
                </div>
              ))}
            </RightContainer>
          </Right>
        </BottomContaier>
      </Wrapper>
      <AdPortfolio />
    </Container>
  );
};

export default Perform;
