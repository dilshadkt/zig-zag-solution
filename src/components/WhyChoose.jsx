import React from "react";
import styled from "styled-components";
import Clientcentric from "../assets/Client-Centric-Digital-Marketing-Malappuram.gif";
import innovation from "../assets/Innovative-Digital-Marketing-Malappuram.gif";
import result from "../assets/Result-Oriented-Digital-Marketing-Malappuram.gif";
import transpareny from "../assets/Transparency-Digital-Marketing-Malappuram.gif";

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
      </Wrapper>
    </Container>
  );
};

export default WhyChoose;
