import React from "react";
import styled from "styled-components";
import Clientcentric from "../assets/Client-Centric-Digital-Marketing-Malappuram.gif";
import innovation from "../assets/Innovative-Digital-Marketing-Malappuram.gif";
import result from "../assets/Result-Oriented-Digital-Marketing-Malappuram.gif";
import transpareny from "../assets/Transparency-Digital-Marketing-Malappuram.gif";
import Anekavarna from "../assets/client-logo/BIDON-2.png";
import LIYAK from "../assets/client-logo/LIYAK.png";
import kayil from "../assets/client-logo/kayil.png";
import kems from "../assets/client-logo/kems.png";
import midas from "../assets/client-logo/midas..png";
import poke from "../assets/client-logo/poke.png";
import white from "../assets/client-logo/white.png";
import BIDON from "../assets/client-logo/Anekavarna---Logo..png";
import skyblue from "../assets/client-logo/skyblue.png";

const Container = styled.div`
  position: relative;
  height: 100%;
  background-color: white;
`;
const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  padding: 20px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  padding-top: 30px;
  font-weight: 500;
  color: grey;
  font-size: 27px;
`;
const Boxes = styled.div`
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  width: 100%;
  display: flex;
  align-items: center;
  margin: 70px 0px;
`;
const Box = styled.div`
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(252, 250, 250);
  padding: 20px;
  flex: 1;
  margin: 0px 7px;
  transition: all 0.5s ease;
  border-radius: 20px;
  &:hover {
    box-shadow: 15px 15px 10px -15px #d47878;
  }
`;
const Icon = styled.img`
  opacity: 60%;
  color: red;
  width: 50px;
`;
const Content = styled.h4`
  color: rgb(100, 89, 95);
`;
const Description = styled.span`
  text-align: center;
  color: rgb(161, 124, 122);
`;
const ClinteLogo = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LogoContaienr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: black; */
  width: 250px;
  border-radius: 10px;
  height: 70px;
  margin: 8px 0px;
  overflow: hidden;
  /* border: 2px solid rgb(255, 235, 235); */
`;
const Image = styled.img`
  background-color: rgb(252, 250, 250);
  opacity: 85%;
  &:hover {
    background-color: rgb(248, 232, 232);
    opacity: 100%;
    transform: scale(1.08);
  }
  transition: all 0.5s ease;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const WhyChoose = () => {
  return (
    <Container>
      <Wrapper>
        <Header>Why Choose Us</Header>
        <Boxes>
          <Box>
            <Icon src={Clientcentric} />
            <Content>Client Centric</Content>
            <Description>
              As our client, your needs and objectives are at the forefront of
              every strategy and campaign we create.
            </Description>
          </Box>
          <Box>
            <Icon src={result} />
            <Content>Result Oriented</Content>
            <Description>
              Rather than a generic marketing approach, we provide a more
              dedicated result-oriented approach.
            </Description>
          </Box>
          <Box>
            <Icon src={innovation} />
            <Content>Innovative</Content>
            <Description>
              What makes us truly unique is our innovative approach to solutions
              with cutting-edge Technology.
            </Description>
          </Box>
          <Box>
            <Icon src={transpareny} />
            <Content>Transparency</Content>
            <Description>
              Maintaining trust and communication with the clients is very
              important for us for a fruitful partnership.
            </Description>
          </Box>
        </Boxes>
        <ClinteLogo>
          <LogoContaienr>
            <Image src={Anekavarna} />
          </LogoContaienr>
          <LogoContaienr>
            <Image src={LIYAK} />
          </LogoContaienr>
          <LogoContaienr>
            <Image src={kayil} />
          </LogoContaienr>
          <LogoContaienr>
            <Image src={kems} />
          </LogoContaienr>
          <LogoContaienr>
            <Image src={midas} />
          </LogoContaienr>
          <LogoContaienr>
            <Image src={poke} />
          </LogoContaienr>
          <LogoContaienr>
            <Image src={white} />
          </LogoContaienr>
          <LogoContaienr>
            <Image src={BIDON} />
          </LogoContaienr>
          <LogoContaienr>
            <Image src={skyblue} />
          </LogoContaienr>
          <LogoContaienr>
            <Image src={Anekavarna} />
          </LogoContaienr>
        </ClinteLogo>
      </Wrapper>
    </Container>
  );
};

export default WhyChoose;
