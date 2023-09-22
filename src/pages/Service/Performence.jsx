import React, { useState } from "react";
import Social from "../../assets/services/performence/Continuous Optimization.jpg";
import Planning from "../../assets/services/performence/Conversion-Oriented Design.jpg";
import Creattion from "../../assets/services/performence/Data-Driven Strategy.jpg";
import Community from "../../assets/services/performence/Performance Marketing Service.jpg";
import Performence from "../../assets/services/performence/Targeted Campaigns.jpg";
import Advertisment from "../../assets/services/performence/Data-Driven Strategy.jpg";
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

const Perform = () => {
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
