import React from "react";
import styled from "styled-components";
import Corperate from "../assets/Coperate-Digital-Marketing-Malappuram.gif";
import Socialmedia from "../assets/Social-media-marketing-Digital-Marketing-Malappuram.gif";
import Seo from "../assets/seo-Digital-Marketing-Malappuram.gif";
import Websitedev from "../assets/Website-Development-Digital-Marketing-Malappuram.gif";
import performence from "../assets/Performance-Marketing-Digital-Marketing-Malappuram.gif";
import mediaprod from "../assets/Media-Production-Digital-Marketing-Malappuram.gif";
import services from "../assets/services.png";
import { Link } from "react-router-dom";
const Container = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
  background-color: white;
`;
const Header = styled.h3`
  width: 100%;
  padding-top: 30px;
  font-weight: 500;
  color: grey;
  font-size: 27px;
  text-align: center;
`;
const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  position: relative;
  z-index: 2;
  padding: 20px 100px;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Upper = styled.div`
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  margin: 50px 0px;
  display: flex;
  width: 100%;
`;
const Lower = styled.div`
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  display: flex;
  width: 100%;
  margin-bottom: 30px;
`;
const Box = styled.div`
  @media screen and (max-width: 768px) {
    margin-bottom: 35px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Icon = styled.img`
  opacity: 65%;
  width: 50px;
`;
const Content = styled.h4`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  /* background-color: green; */
  width: 50%;
  text-align: left;
  color: rgb(100, 89, 95);
`;
const List = styled.ul`
  margin: 0;
  width: 50%;
  text-align: left;
  list-style: circle;
`;
const Item = styled.li`
  margin: 5px 0px;
`;
const LearnMore = styled.span`
  cursor: pointer;
  width: 50%;
  text-align: left;

  margin-top: 10px;
  color: red;
`;
const ImageContainer = styled.div`
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  text-align: left;
  width: 50%;
`;
const SerivesBg = styled.img`
  @media screen and (max-width: 768px) {
    transform: scale(7);
  }
  width: 20%;
  transform: scale(4);
  object-fit: cover;
  z-index: 1;
  top: 14%;
  right: 0;
  position: absolute;
  opacity: 40%;
`;
const ExploreBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  color: red;
  /* padding: 10px 40px; */
  /* border: 1px double black; */
  &:hover {
    border-color: orange;
    color: black;
    font-weight: 500;
  }
`;
const Serivice = () => {
  return (
    <Container id="service">
      <Wrapper>
        <Header>Services</Header>
        <Bottom>
          <Upper>
            <Box>
              <ImageContainer>
                <Icon src={Corperate} />
              </ImageContainer>

              <Content>Corporate Branding</Content>
              <List>
                <Item>Market Research</Item>
                <Item>Strategy Development</Item>
                <Item>Design and Collateral Creation</Item>
                <Item>Implementation</Item>
                <Item>Visual Identity</Item>
              </List>
              <LearnMore>
                <Link
                  to={"/service/corperate"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Learn More
                </Link>
              </LearnMore>
            </Box>
            <Box>
              <ImageContainer>
                <Icon src={Socialmedia} />
              </ImageContainer>

              <Content>Social media marketing</Content>
              <List>
                <Item>Strategy Development</Item>
                <Item>Design Creation</Item>
                <Item>Content Scheduling & Publishing</Item>
                <Item>Community Engagement</Item>
                <Item>Analytics</Item>
              </List>
              <LearnMore>
                <Link
                  to={"/service/social"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Learn More
                </Link>
              </LearnMore>
            </Box>
            <Box>
              <ImageContainer>
                <Icon src={Seo} />
              </ImageContainer>

              <Content>SEO</Content>
              <List>
                <Item>Keyword Research</Item>
                <Item>On-Page Optimization</Item>
                <Item>Technical SEO</Item>
                <Item>Link Building</Item>
                <Item>Analytics and Reporting</Item>
              </List>
              <LearnMore>
                {" "}
                <Link
                  to={"/service/seo"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Learn More
                </Link>
              </LearnMore>
            </Box>
          </Upper>
          <Lower>
            {" "}
            <Box>
              <ImageContainer>
                <Icon src={Websitedev} />
              </ImageContainer>

              <Content>Website Development </Content>
              <List>
                <Item>Discovery and Planning</Item>
                <Item>Design and Mockup</Item>
                <Item>Development</Item>
                <Item>Testing and Quality Assurance</Item>
                <Item>Launch and Deployment</Item>
              </List>
              <LearnMore>
                {" "}
                <Link
                  to={"/service/corperate"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Learn More
                </Link>
              </LearnMore>
            </Box>
            <Box>
              <ImageContainer>
                <Icon src={performence} />
              </ImageContainer>

              <Content>Performance Marketing</Content>
              <List>
                <Item>Goal Setting</Item>
                <Item>Audience and Channel Research</Item>
                <Item>Campaign Creation</Item>
                <Item>Launch and Monitoring</Item>
                <Item>Data Analysis and Optimization</Item>
              </List>
              <LearnMore>
                {" "}
                <Link
                  to={"/service/social"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Learn More
                </Link>
              </LearnMore>
            </Box>
            <Box>
              <ImageContainer>
                <Icon src={mediaprod} />
              </ImageContainer>

              <Content>Media Production</Content>
              <List>
                <Item>Concept Development</Item>
                <Item>Pre-Production Planning</Item>
                <Item>Production Phase</Item>
                <Item>Post-Production Editing</Item>
                <Item>Review and Feedback</Item>
              </List>
              <LearnMore>
                {" "}
                <Link
                  to={"/service/webdev"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Learn More
                </Link>
              </LearnMore>
            </Box>
          </Lower>
          <ExploreBtn>
            <Link
              to={"/service/corperate"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Explore More
            </Link>
          </ExploreBtn>
        </Bottom>
      </Wrapper>
      <SerivesBg src={services} />
    </Container>
  );
};

export default Serivice;
