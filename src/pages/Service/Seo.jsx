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
import LinkBuild from "../../assets/services/seo/Link Building.jpg";
import performance from "../../assets/services/seo/Performance Tracking and Analytics.jpg";
import AdPortfolio from "../../components/ad-portfolio/AdPortfolio";
import { Helmet } from "react-helmet";

const Seo = () => {
  const [content, setContent] = useState([datas[0]]);
  function changeThem(id) {
    const result = datas.filter((item) => item.id === id);
    setContent(result);
  }
  return (
    <Container>
      <Helmet>
        <title>
          {
            "Best Digital Marketing Agency in Malappuram providing complete digital marketing and branding services for brands across the globe."
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
          content="SEO agency, Malappuram, Search engine optimization, SEO services, Local SEO, Website optimization, SEO experts, Digital marketing, Online visibility, SEO strategies"
        />
        <meta
          property="og:title"
          content={
            "Leading SEO Agency in Malappuram for Ranking On Top Of Google"
          }
        />
        <meta
          property="og:description"
          content={
            "Improve your search engine ranking with the top SEO agency in Malappuram. Our SEO experts specialize in local SEO, website optimization, and proven SEO strategies to help your business rank higher on search engines and attract more online visitors."
          }
        />
      </Helmet>

      <Wrapper>
        <HeaderImg src={seo} alt={seo} />
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
        <SubHeader>Why SEO Matters?</SubHeader>
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
        <SubHeader>Our SEO Approach</SubHeader>
        <BottomContaier>
          <Left>
            <BoxContainer>
              <BoxItem onMouseEnter={() => changeThem(1)}>
                <Image src={comprensive} alt={comprensive} />
                Comprehensive Website Audit
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(2)}>
                <Image src={ketword} alt={ketword} /> Keyword Research and
                Strategy
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(3)}>
                <Image src={onPage} alt={onPage} /> On-Page Optimization
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(4)}>
                {" "}
                <Image src={highlite} alt={highlite} />
                High-Quality Content Creation
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(5)}>
                {" "}
                <Image src={LinkBuild} alt={LinkBuild} /> Link Building
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(6)}>
                {" "}
                <Image src={performance} alt={performance} /> Performance
                Tracking and Analytics
              </BoxItem>
            </BoxContainer>
          </Left>
          <Right>
            <RightContainer>
              {content.map((item, index) => (
                <div key={index}>
                  <Image src={comprensive} alt={comprensive} />
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
