import React, { useState } from "react";
import webdev from "../../assets/services/webdev/Content Integration.jpg";
import discover from "../../assets/services/webdev/Design and Development.jpg";
import Creattion from "../../assets/services/webdev/Launch and Maintenance.jpg";
import Community from "../../assets/services/webdev/Testing and Quality Assurance.jpg";
import Advertisment from "../../assets/services/webdev/Content Integration.jpg";
import Performence from "../../assets/services/webdev/Design and Development.jpg";
import { datas } from "../../assets/services/webdev/Data";
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
import { Helmet } from "react-helmet";

const Webdev = () => {
  ///////////////////////////////////////
  const [content, setContent] = useState([datas[0]]);
  function changeThem(id) {
    const result = datas.filter((item) => item.id === id);
    console.log(result);
    setContent(result);
  }
  return (
    <Container>
      <Helmet>
        <title>
          {
            " Best Digital Marketing Agency in Malappuram providing complete digital marketing and branding services for brands across the globe."
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
          content="Web development agency, Malappuram, Website development, Web design, Custom web development, Web development services, Responsive web design, E-commerce development, Website maintenance, Web development experts"
        />
        <meta
          property="og:title"
          content={
            "Web Development Agency in Malappuram for High Converting Websites"
          }
        />
        <meta
          property="og:description"
          content={
            "Discover excellence in web development with our agency in Malappuram. We specialize in custom website development, responsive web design, e-commerce solutions, and professional web maintenance services. Trust our web development experts to bring your online business to success."
          }
        />
      </Helmet>
      <Wrapper>
        <HeaderImg src={webdev} />
        <Header>Website Development Services in Malappuram</Header>
        <Content>
          A website is a visual representation of your brand online. It should
          be a reflection of your corporate brand identity. We specialize in
          creating websites with above-the-mark user interfaces and user
          experiences that are highly captivating, engaging, and converting.
        </Content>
        <SubHeader>Why Website Development Matters?</SubHeader>
        <Content>
          Your website is the first impression and virtual front door to your
          business. Greet your potential customers with irresistible copy,
          offering your best services and persuading them to take the next step.
        </Content>
        <SubHeader>Our Social Media Marketing Approach</SubHeader>
        <BottomContaier>
          <Left>
            <BoxContainer>
              <BoxItem onMouseEnter={() => changeThem(1)}>
                <Image src={discover} />
                Discovery and Planning
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(2)}>
                <Image src={Creattion} />
                Design and Development
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(3)}>
                <Image src={Community} /> Content Integration
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(4)}>
                {" "}
                <Image src={Advertisment} />
                Testing and Quality Assurance
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(5)}>
                {" "}
                <Image src={Performence} /> Launch and Maintenance
              </BoxItem>
              <BoxItem onMouseEnter={() => changeThem(6)}>
                <Image src={Performence} /> Launch and Maintenance
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

export default Webdev;
