import React, { useState } from "react";
import styled from "styled-components";
import Social from "../../assets/services/performence/Continuous Optimization.jpg";
import Planning from "../../assets/services/performence/Conversion-Oriented Design.jpg";
import Creattion from "../../assets/services/performence/Data-Driven Strategy.jpg";
import Community from "../../assets/services/performence/Performance Marketing Service.jpg";
import Performence from "../../assets/services/performence/Targeted Campaigns.jpg";
import Advertisment from "../../assets/services/performence/Data-Driven Strategy.jpg";
import { datas } from "../../assets/services/performence/Data";

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
const Content = styled.span`
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
  font-size: 20px;
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
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 85%;

  border-radius: 20px;
  padding: 20px;
`;

const Perform = () => {
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
                <Image src={Creattion} /> Targeted Campaigns
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
    </Container>
  );
};

export default Perform;
