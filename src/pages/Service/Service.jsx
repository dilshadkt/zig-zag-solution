import React, { useState } from "react";
import styled from "styled-components";
import Corperate from "../../assets/services/corperate/Corporate Branding.jpg";
import Strategy from "../../assets/services/corperate/Brand Strategy.jpg";
import Visual from "../../assets/services/corperate/Visual Identity.jpg";
import Messaging from "../../assets/services/corperate/Brand Messaging.jpg";
import Guidness from "../../assets/services/corperate/Brand Guidelines.png";
import Precense from "../../assets/services/corperate/Online Presence.jpg";
import AdPortfolio from "../../components/ad-portfolio/AdPortfolio";
import { data } from "../../assets/services/corperate/data";
import { BottomContaier, RightContainer } from "./SocialMedia";
import { Left } from "./SocialMedia";
import { Right } from "./SocialMedia";
import { Helmet } from "react-helmet";

export const Container = styled.div`
  @media screen and (max-width: 768px) {
    margin: 0;
  }
  margin: 0% 12%;
`;
export const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  padding: 20px 70px;
  display: flex;
  flex-direction: column;
`;
export const HeaderImg = styled.img`
  @media screen and (max-width: 768px) {
    height: 220px;
  }
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
`;
export const Header = styled.h1`
  color: red;
  font-weight: 500;
  text-align: center;
`;
export const Content = styled.span`
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  line-height: 30px;
  font-size: 23px;
  text-align: justify;
`;
export const Highlite = styled.span`
  color: red;
  font-weight: 600;
`;
export const SubHeader = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-top: 40px;
`;
export const BoxContainer = styled.div`
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
export const Box = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 15px;
    width: 40%;
    max-width: 160px;
    height: 50%;
  }
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21%;
  height: 160px;

  min-height: 130px;
  color: white;
  font-size: 19px;
  padding: 0px 5px;
  text-align: center;
  background-color: rgb(219, 0, 47);

  border-radius: 20px;
`;
export const BoxItem = styled.div`
  @media screen and (max-width: 768px) {
    font-size: 17px;
    width: 30%;
    min-width: 150px;
  }
  margin: 5px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42%;
  height: 50%;
  min-width: 100px;
  min-height: 150px;
  color: white;
  font-size: 20px;
  padding: 0px 5px;
  text-align: center;
  background-color: rgb(219, 0, 47);
  border-radius: 20px;
  overflow: hidden;
  z-index: 5;
  font-size: 700;
`;
export const Image = styled.img`
  top: 0;
  left: 0;
  z-index: -1;
  position: absolute;
  height: 100%;
  object-fit: cover;
  width: 100%;
  opacity: ${(props) => (props.status === "service" ? 20 : 50)}%;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const Serivce = () => {
  const [content, setContent] = useState([data[0]]);
  function changeThem(id) {
    const result = data.filter((item) => item.id === id);
    setContent(result);
  }
  return (
    <Container>
      <Helmet>
        <title>
          {
            " Best Digital Marketing Agency in Malappuram providing complete digital marketing and branding services for brands across the globe"
          }
        </title>
        <meta
          name="description"
          content={
            " As your trusted digital marketing agency in malappuram, we provide corporate branding, seo, social media, paid ads, website development services for your brand. "
          }
        />
        <meta
          name="keywords"
          content="Corporate branding, Brand identity, Brand strategy, Logo design, Visual identity, Branding agency, Brand guidelines, Brand image, Corporate image, Brand messaging, Brand recognition
          "
        />
        <meta
          property="og:title"
          content={
            "Elevate Your Business with Expert Corporate Branding Services"
          }
        />
        <meta
          property="og:description"
          content={
            "Transform your business with our comprehensive corporate branding solutions. Our branding agency in malappuram specializes in creating a unique brand identity, logo design, and brand strategy that will set your company apart. Build a strong corporate image and brand recognition with our professional expertise."
          }
        />
      </Helmet>
      <Wrapper>
        <HeaderImg src={Corperate}></HeaderImg>
        <Header>Best Corporate Branding Service in Malappuram</Header>
        <Content>
          Welcome to <Highlite>Zig Zag </Highlite>Digital Solutions, your
          premier digital marketing partner in creating the most sought-after
          corporate brand identity that resonates with your vision. A strong
          corporate identity is more crucial than ever today due to the digital
          revolution. Our expert team based in Malappuram specializes in
          creating distinctive corporate identities that leave a lasting
          impression on your target audience, making you stay on top of their
          mind.
        </Content>
        <SubHeader>Why Corporate Branding Matters?</SubHeader>
        <BoxContainer>
          <Box>A reflection of your company’s mission, vision, and values.</Box>
          <Box>
            An identity that influences the audience’s perception of the brand.
          </Box>
          <Box>To help your company stand out among the competitors.</Box>
          <Box>To build trust and credibility among your customers.</Box>
        </BoxContainer>
        <SubHeader>Our Unique Corporate Branding Approach</SubHeader>
        <BottomContaier>
          <Left>
            <BoxContainer>
              <BoxItem onMouseEnter={() => changeThem(1)}>
                <Image src={Strategy} />
                Brand Strategy
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(2)}>
                <Image src={Visual} />
                Visual Identity
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(3)}>
                <Image src={Messaging} />
                Brand Messaging
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(4)}>
                <Image src={Strategy} />
                Online Presence
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(5)}>
                <Image src={Guidness} />
                Brand Guidelines
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(6)}>
                <Image src={Precense} />
                Brand Consistency
              </BoxItem>
            </BoxContainer>
          </Left>
          <Right>
            <RightContainer>
              {content.map((item, index) => (
                <div key={index}>
                  <Image src={Precense} status="service" />
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

export default Serivce;
