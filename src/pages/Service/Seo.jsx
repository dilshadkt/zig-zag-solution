import React, { useState } from "react";
import seo from "../../assets/services/seo/seo.jpg";
import { BoxContainer } from "../Service/Service";
import { RightContainer } from "./SocialMedia";
import { Right } from "./SocialMedia";
import { Left } from "./SocialMedia";
import { BottomContaier } from "./SocialMedia";
import { Image } from "../Service/SocialMedia";
import { BoxItem } from "../Service/Service";
import { datas } from "../../assets/services/seo/Data";
import { Box } from "../Service/Service";
import { HeaderImg } from "../Service/Service";
import { Header } from "../Service/Service";
import { Content } from "../Service/Service";
import { SubHeader } from "../Service/Service";
import { Wrapper } from "../Service/Service";
import { Container } from "../Service/Service";
import comprensive from "../../assets/services/seo/Comprehensive Website Audit.jpg";
import ketword from "../../assets/services/seo/Keyword Research and Strategy.jpeg";
import onPage from "../../assets/services/seo/On-Page Optimization.jpg";
import highlite from "../../assets/services/seo/High-Quality Content Creation.jpg";
import LinkBuild from "../../assets/services/seo/High-Quality Content Creation.jpg";
import performance from "../../assets/services/seo/Performance Tracking and Analytics.jpg";
import AdPortfolio from "../../components/ad-portfolio/AdPortfolio";

const Seo = () => {
  const [content, setContent] = useState([datas[0]]);
  function changeThem(id) {
    const result = datas.filter((item) => item.id === id);
    console.log(result);
    setContent(result);
  }
  return (
    <Container>
      <Wrapper>
        <HeaderImg src={seo} />
        <Header>SEO Services in Malappuram</Header>
        <Content>
          As a prominent digital marketing company rooted in Malappuram, we
          specialize in providing search engine optimization services to
          position your brand at the forefront of Google search results. As more
          companies turn digital, this is the best way to drive organic traffic
          and generate high-quality leads without spending huge amounts on
          advertisements. Our SEO approach is a step-by-step process that
          continues to improve your position on Google till you rank No.1 on
          Google!
        </Content>
        <SubHeader>Why Social Media Marketing?</SubHeader>
        <BoxContainer>
          <Box>
            SEO is your gateway to being found on search engine result pages
            like Google.
          </Box>
          <Box>
            It is the strategic placement of websites through an effective SEO
            plan.{" "}
          </Box>
          <Box>
            As SEO experts in Malappuram with years of experience in the field,
          </Box>
          <Box>
            SEO It is the most common way we search for a particular product,
            service, or solution
          </Box>
        </BoxContainer>
        <SubHeader>Our Social Media Marketing Approach</SubHeader>
        <BottomContaier>
          <Left>
            <BoxContainer>
              <BoxItem onMouseEnter={() => changeThem(1)}>
                <Image src={comprensive} />
                Comprehensive Website Audit
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(2)}>
                <Image src={ketword} /> Keyword Research and Strategy
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(3)}>
                <Image src={onPage} /> On-Page Optimization
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(4)}>
                {" "}
                <Image src={highlite} />
                High-Quality Content Creation
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(5)}>
                {" "}
                <Image src={LinkBuild} /> Link Building
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(6)}>
                {" "}
                <Image src={performance} /> Performance Tracking and Analytics
              </BoxItem>
            </BoxContainer>
          </Left>
          <Right>
            <RightContainer>
              {content.map((item, index) => (
                <div key={index}>
                  <Image src={comprensive} status="service" />
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

export default Seo;
