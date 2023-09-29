import React, { useState } from "react";
import styled from "styled-components";
import Social from "../../assets/services/socailmedia/Social Media Marketing.jpg";
import Planning from "../../assets/services/socailmedia/Strategy Planning.jpg";
import Creattion from "../../assets/services/socailmedia/Compelling Content Creation.jpg";
import Community from "../../assets/services/socailmedia/Community Engagement.jpg";
import Advertisment from "../../assets/services/socailmedia/Targeted Advertising.jpg";
import Performence from "../../assets/services/socailmedia/Performance Analytics.jpg";
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  flex: 2;
`;
export const RightContainer = styled.div`
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
          <Box>
            People use social media for various reasons. But why is social media
            marketing crucial for brands?
          </Box>
          <Box>
            It is where your customers are. Unlike traditional marketing
            methods, it is easy for you to target a specific target audience
            while running ads on social media, giving faster growth and reach.{" "}
          </Box>
          <Box>
            The ability to measure insights and performance accurately makes it
            the best marketing method for brands if used appropriately.
          </Box>
          <Box>
            Our Social media marketing enables your brand awareness, customer
            engagement, and business growth through tailored strategies.{" "}
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
                <Image src={Performence} /> Adaptation
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
