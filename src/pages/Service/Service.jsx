import React from "react";
import styled from "styled-components";
import Corperate from "../../assets/services/corperate/Corporate Branding.jpg";
import Strategy from "../../assets/services/corperate/Brand Strategy.jpg";
import Visual from "../../assets/services/corperate/Visual Identity.jpg";
import Messaging from "../../assets/services/corperate/Brand Messaging.jpg";
import Guidness from "../../assets/services/corperate/Brand Guidelines.png";
import Precense from "../../assets/services/corperate/Online Presence.jpg";

export const Container = styled.div`
  @media screen and (max-width: 768px) {
    margin: 0;
  }
  margin: 0px 12%;
`;
export const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  padding: 20px 70px;
  display: flex;
  flex-direction: column;
`;
export const HeaderImg = styled.img`
  @media screen and (max-width: 768px) {
    height: 220px;
  }
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
`;
export const Header = styled.h1`
  color: red;
  font-weight: 500;
  text-align: center;
`;
export const Content = styled.span`
  line-height: 30px;
  font-size: 23px;
  text-align: justify;
`;
export const Highlite = styled.span`
  color: red;
  font-weight: 600;
`;
export const SubHeader = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-top: 40px;
`;
export const BoxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
export const Box = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23%;
  height: 160px;
  min-width: 150px;
  min-height: 150px;
  color: white;
  font-size: 19px;
  padding: 0px 5px;
  text-align: center;
  background-color: rgb(219, 0, 47);

  border-radius: 20px;
`;
export const BoxItem = styled.div`
  margin: 5px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18%;
  height: 150px;
  min-width: 150px;
  min-height: 150px;
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
  z-index: -1;
  position: absolute;
  height: 100%;
  object-fit: cover;
  width: 100%;
  opacity: 50%;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const Serivce = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderImg src={Corperate}></HeaderImg>
        <Header>Best Corporate Branding Service in Malappuram</Header>
        <Content>
          Welcome to <Highlite>Zig Zag </Highlite>Digital Solutions, your
          premier digital marketing partner in creating the most sought-after
          corporate brand identity that resonates with your vision. A strong
          corporate identity is more crucial than ever today due to the digital
          revolution. Our expert team based in Malappuram specializes in
          creating distinctive corporate identities that leave a lasting
          impression on your target audience, making you stay on top of their
          mind.
        </Content>
        <SubHeader>Why Corporate Branding Matters?</SubHeader>
        <BoxContainer>
          <Box>A reflection of your company’s mission, vision, and values.</Box>
          <Box>
            An identity that influences the audience’s perception of the brand.
          </Box>
          <Box>To help your company stand out among the competitors.</Box>
          <Box>To build trust and credibility among your customers.</Box>
        </BoxContainer>
        <SubHeader>Our Unique Corporate Branding Approach</SubHeader>
        <BoxContainer>
          <BoxItem>
            <Image src={Strategy} />
            <a
              href="#Guidelines"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {" "}
              Brand Strategy
            </a>
          </BoxItem>
          <BoxItem>
            {" "}
            <Image src={Visual} />
            <a
              href="#Identity"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {" "}
              Visual Identity
            </a>
          </BoxItem>
          <BoxItem>
            {" "}
            <Image src={Messaging} />
            <a
              href="#Messaging"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {" "}
              Brand Messaging
            </a>
          </BoxItem>
          <BoxItem>
            {" "}
            <Image src={Precense} />
            <a
              href="#Presence"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {" "}
              Online Presence
            </a>
          </BoxItem>
          <BoxItem>
            {" "}
            <Image src={Guidness} />
            <a
              href="#Guidelines"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {" "}
              Brand Guidelines
            </a>
          </BoxItem>
        </BoxContainer>
        <SubHeader id="Strategy">1. Brand Strategy</SubHeader>
        <Content>
          A compelling brand strategy is the backbone of corporate branding. The
          very first step of corporate branding is market research for us.
          Understanding the market gives us many insights into the product
          demand, KPIs, target audience, and paint points. The whole idea of
          corporate branding is to leave a lasting positive impression in the
          market. Our key differences are important in crashing through the
          competition and reaching the right customers. We understand the what,
          how, and where to develop a strong brand strategy for your business.
        </Content>
        <SubHeader id="Identity">2. Visual Identity</SubHeader>
        <Content>
          What determines the worth of your brand is how the audience perceives
          it. The simple and most underrated things give the uniqueness your
          brand deserves. Therefore, we do not look small at the brand's visual
          identity. The logos, the colour palettes, the typography, and all the
          other visual elements have their role in defining the brand’s essence
          most aesthetically. The goal is to find a visual identity for your
          brand across all digital platforms and collateral that aligns with
          what your brand stands for!
        </Content>
        <SubHeader id="Messaging">3. Brand Messaging</SubHeader>
        <Content>
          Words evoke emotions in humans. And when you are a brand, it is
          crucial to define a specific tone and message for your brand. A unique
          message conveys the brand’s goals to the target audience most simply
          and effectively. Your taglines, brand story, and every piece of
          content that you publish online should convey the same. Overall, the
          brand messaging should resonate with your audience emotionally.
        </Content>
        <SubHeader id="Presence">4. Online Presence</SubHeader>
        <Content>
          A strong online presence is at the core of branding for your business.
          As you develop a corporate branding strategy, it becomes easy for you
          to understand how to build a strong online presence. Whether your
          website or social media profiles, the brand elements should reflect
          your values and stand out from the competitors. We ensure your brand's
          voice and visuals are seamlessly integrated into your digital assets.
        </Content>
        <SubHeader id="Guidelines">5. Brand Guidelines</SubHeader>
        <Content>
          Corporate branding is not just about visual elements. A brand without
          guidelines is a bad option if you have long-term goals to increase
          your business. In addition to building a recognizable corporate
          identity, A brand guideline is a rulebook on how your brand elements
          can be implemented across various platforms. This makes your branding
          process much easier and more effective. We help you have an entire
          brand identity that resonates with your market. It's a smart
          investment that pays off by bringing in loyalty, recognition, and a
          lasting impact on your target audience.
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Serivce;
