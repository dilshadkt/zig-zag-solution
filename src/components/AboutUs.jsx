import React from "react";
import styled from "styled-components";
import About from "../assets/about.png";
import Aboutus from "../assets/About Us.png";

const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  background-color: white;
`;
const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding: 0px 20px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 70px;
  padding-bottom: 20px;
  position: relative;
`;

const Image = styled.img`
  width: 50%;
`;
const Header = styled.h3`
  /* padding-top: 30px; */
  font-weight: 500;
  color: grey;
  font-size: 27px;
`;
const Content = styled.span`
  @media screen and (max-width: 768px) {
    text-align: justify;
    width: 100%;
  }
  width: 70%;
  text-align: left;
  line-height: 30px;
  font-size: 20px;
`;
const BrandTalk = styled.h2``;
const Bottom = styled.div`
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  display: flex;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Right = styled.div`
  @media screen and (max-width: 768px) {
    align-items: center;
  }
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  flex: 1;
`;
const ReadButton = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
  cursor: pointer;
  color: grey;
  padding: 10px 40px;
  border: 1px double black;
  &:hover {
    border-color: orange;
    color: black;
    font-weight: 500;
  }
`;
const Hight = styled.span`
  color: #ff0000;
  font-weight: 500;
`;
const AboutBackground = styled.img`
  @media screen and (max-width: 768px) {
    transform: scale(1);
    transform: translateX(100px);
    top: 45%;
  }
  bottom: 20%;
  width: 100%;
  z-index: -1;
  position: absolute;
  opacity: 40%;
`;
const AboutUs = () => {
  return (
    <>
      <Container id="about">
        <Wrapper>
          <Header>About Us</Header>
          <Bottom>
            <Left>
              <Image src={About} />
            </Left>
            <Right>
              <BrandTalk>WE MAKE BRANDS TALK</BrandTalk>
              <Content>
                At <Hight>Zig Zag</Hight>, we believe the “Road To Success Is
                Not A Straight One,” hence the name. As your trusted Digital
                Marketing Agency in Malappuram, we want to be the driving force
                that turns your business ideas and dreams into reality.{" "}
              </Content>
              <Content>
                {" "}
                If you are looking for a digital marketing company for your
                business to take over the ever-evolving digital platforms and
                establish a compelling online presence, you have come to the
                right place. We provide comprehensive digital marketing and
                branding solutions that suit you best.
              </Content>
              <ReadButton>Read Our Story</ReadButton>
              <AboutBackground src={Aboutus} />
            </Right>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default AboutUs;
