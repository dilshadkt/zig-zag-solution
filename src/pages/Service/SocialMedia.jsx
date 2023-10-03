import React, { useState } from "react";
import styled from "styled-components";
import Social from "../../assets/services/socailmedia/Social Media Marketing.jpg";
import Planning from "../../assets/services/socailmedia/Strategy Planning.jpg";
import Creattion from "../../assets/services/socailmedia/Compelling Content Creation.jpg";
import Community from "../../assets/services/socailmedia/Community Engagement.jpg";
import Advertisment from "../../assets/services/socailmedia/Targeted Advertising.jpg";
import Performence from "../../assets/services/socailmedia/Performance Analytics.jpg";
import Adaptation from "../../assets/services/socailmedia/Adaptation.jpg";
import { datas } from "../../assets/services/socailmedia/Datas";
import { Box } from "../Service/Service";
import { BoxItem } from "../Service/Service";
import { BoxContainer } from "../Service/Service";
import { Container } from "../Service/Service";
import { Wrapper } from "../Service/Service";
import { Header } from "../Service/Service";
import { HeaderImg } from "../Service/Service";
import { Content } from "../Service/Service";
import { SubHeader } from "../Service/Service";
import AdPortfolio from "../../components/ad-portfolio/AdPortfolio";
import { Helmet } from "react-helmet";

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
export const BottomContaier = styled.div`
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    /* background-color: green; */
  }
  display: flex;
`;
export const Left = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
  flex: 1;
`;
export const Right = styled.div`
  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  flex: 2;
`;
export const RightContainer = styled.div`
  @media screen and (max-width: 768px) {
    width: 90%;
  }

  height: 100%;
  overflow: hidden;
  position: relative;
  width: 85%;

  border-radius: 20px;
  padding: 20px;
`;

const SocialMedia = () => {
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
          {
            " Best Digital Marketing Agency in Malappuram providing complete digital marketing and branding services for brands across the globe."
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
          content="Social media marketing, Social media agency, Malappuram, Digital marketing, Social media management, Social media advertising, Online presence, Brand promotion, Social media strategy, Social media campaigns, Social media experts"
        />
        <meta
          property="og:title"
          content={"Leading Social Media Marketing Agency in Malappuram"}
        />
        <meta
          property="og:description"
          content={
            "Boost your brand's online presence with the top social media marketing agency in Malappuram. Our experts specialize in social media management, advertising, and strategic campaigns to promote your brand effectively. Partner with us for exceptional digital marketing results."
          }
        />
      </Helmet>

      <Wrapper>
        <HeaderImg src={Social} />
        <Header>Social Media Marketing in Malappuram</Header>
        <Content>
          Our team of social media experts specializes in crafting strategic and
          engaging social media campaigns that gain you worldwide brand
          recognition and growth. Leverage social media marketing with quality
          content that adds value, copy that compels you to take action, and an
          aesthetically pleasing feed that gives a lasting impression on your
          audience.
        </Content>
        <SubHeader>Why Social Media Marketing?</SubHeader>
        <BoxContainer>
          <Box>People use social media for various reasons</Box>
          <Box>
            It is where your customers are. Unlike traditional marketing methods
          </Box>
          <Box>
            The ability to measure insights and performance accurately makes it
            the best marketing.
          </Box>
          <Box>
            Our Social media marketing enables your brand awareness, customer
            engagement,
          </Box>
        </BoxContainer>
        <SubHeader>Our Social Media Marketing Approach</SubHeader>
        <BottomContaier>
          <Left>
            <BoxContainer>
              <BoxItem onMouseEnter={() => changeThem(1)}>
                <Image src={Planning} />
                Strategy Planning
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(2)}>
                <Image src={Creattion} /> Compelling Content Creation
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(3)}>
                <Image src={Community} /> Community Engagement
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(4)}>
                <Image src={Advertisment} />
                Targeted Advertising
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(5)}>
                <Image src={Performence} /> Performance Analytics
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(6)}>
                <Image src={Adaptation} /> Adaptation
              </BoxItem>
            </BoxContainer>
          </Left>
          <Right>
            <RightContainer>
              {content.map((item, index) => (
                <div key={index}>
                  <Image src={Performence} status={"service"} />
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

export default SocialMedia;
