import React, { useState } from "react";
import styled from "styled-components";
import Social from "../../assets/services/socailmedia/Social Media Marketing.jpg";
import Planning from "../../assets/services/socailmedia/Strategy Planning.jpg";
import Creattion from "../../assets/services/socailmedia/Compelling Content Creation.jpg";
import Community from "../../assets/services/socailmedia/Community Engagement.jpg";
import Advertisment from "../../assets/services/socailmedia/Targeted Advertising.jpg";
import Performence from "../../assets/services/socailmedia/Performance Analytics.jpg";
import { datas } from "../../assets/services/socailmedia/Datas";

const Container = styled.div`
  @media screen and (max-width: 768px) {
    margin: 0;
  }
  margin: 0px 12%;
`;
const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  padding: 20px 5%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.h1`
  color: red;
  font-weight: 500;
  text-align: center;
`;
const HeaderImg = styled.img`
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
`;
const Content = styled.p`
  line-height: 30px;
  font-size: 21px;

  text-align: justify;
  display: flex;
`;

const SubHeader = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-top: 40px;
`;
export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Box = styled.div`
  margin: 5px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23%;

  min-width: 150px;
  min-height: 150px;
  color: white;
  font-size: 17px;
  padding: 10px 5px;
  text-align: center;
  background-color: rgb(219, 0, 47);
  border-radius: 20px;
`;
export const BoxItem = styled.div`
  margin: 5px 0px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 160px;
  min-width: 120px;
  min-height: 120px;
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
  /* @media screen and (max-width: 768px) {
    width: 95%;
  } */
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 85%;

  border-radius: 20px;
  padding: 20px;
`;

const SocialMedia = () => {
  ///////////////////////////////////////
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
                {" "}
                <Image src={Advertisment} />
                Targeted Advertising
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(5)}>
                {" "}
                <Image src={Performence} /> Performance Analytics
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
    </Container>
  );
};

export default SocialMedia;
