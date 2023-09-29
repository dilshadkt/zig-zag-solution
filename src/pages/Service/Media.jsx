import React, { useState } from "react";
import Social from "../../assets/services/media/Creative Conceptualization.jpg";
import Planning from "../../assets/services/media/Diverse Content Formats.jpg";
import Creattion from "../../assets/services/media/Final Delivery.jpg";
import Community from "../../assets/services/media/High-Quality Production.jpg";
import Advertisment from "../../assets/services/media/Media Production Services.jpg";
import Performence from "../../assets/services/media/Review and Feedback.jpg";
import { datas } from "../../assets/services/media/Data";
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

const Media = () => {
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
        <Header>Media Production Services in Malappuram</Header>
        <Content>
          As a cutting-edge digital marketing agency in Malappuram, we
          specialize in bringing captivating visual narratives that amplify
          brand impact. Join us in media production, and let us get your brand's
          storytelling to new heights with stunning visuals.
        </Content>
        <SubHeader>Why Media Production Matters?</SubHeader>
        <Content>
          Great visuals and compelling stories make you stand out in a world of
          endless information and content consumption. Media production is the
          key to engaging your audience deeper and leaving a lasting impression.
        </Content>
        <SubHeader>Our Media Production Approach</SubHeader>
        <BottomContaier>
          <Left>
            <BoxContainer>
              <BoxItem onMouseEnter={() => changeThem(1)}>
                <Image src={Planning} />
                Creative Conceptualization
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(2)}>
                <Image src={Creattion} /> High-Quality Production
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(3)}>
                <Image src={Community} /> Diverse Content Formats
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(4)}>
                {" "}
                <Image src={Advertisment} />
                Review and Feedback
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(5)}>
                {" "}
                <Image src={Performence} /> Final Delivery
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(6)}>
                {" "}
                <Image src={Performence} /> Storytelling
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

export default Media;
