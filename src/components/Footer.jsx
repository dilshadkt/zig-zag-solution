import React from "react";
import styled from "styled-components";
import logo from "../assets/digital-market-agency-in-malappuram.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  height: 100%;
  background-color: rgb(252, 250, 250);
`;
const Wrapper = styled.div`
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 20px;
    padding-bottom: 70px;
    flex-direction: column;
  }
  padding: 40px 70px;
  display: flex;
`;
const Left = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 3;
  flex-direction: column;
`;

const Logo = styled.img`
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 50px;
  }
  width: 200px;
  height: 90px;
  object-fit: cover;
`;
const Header = styled.div`
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 0px;
  }
  text-align: left;

  margin-top: 7px;
  font-weight: 500;
  width: 75%;
  color: rgb(119, 139, 174);
  font-size: 23px;
`;
const GetButton = styled.button`
  @media screen and (max-width: 768px) {
    padding: 15px 20px;
    font-size: 13px;
    font-weight: 400;
  }
  padding: 7px 30px;
  border-radius: 50px;
  border: 2px solid rgb(84, 89, 95);
  background-color: transparent;
  color: white;
  font-weight: 600;
  background-color: rgb(84, 89, 95);
  font-size: 15px;
  &:hover {
    background-color: rgb(53, 56, 60);
  }
`;
const Bottom = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;

    justify-content: flex-start;
  }
  margin-top: 30px;
  align-items: center;
  display: flex;
`;
const ContactInfo = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
`;
const Contact = styled.span`
  font-size: ${(prop) => (prop.type === "number" ? 17 : 12)}px;
  font-weight: ${(prop) => (prop.type === "number" ? 700 : 400)};
  color: rgb(119, 139, 174);
`;
const Right = styled.div`
  @media screen and (max-width: 768px) {
    flex-direction: column;
    display: none;
  }
  color: rgb(119, 139, 174);
  display: flex;
  flex: 4;
`;
const Company = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 2;
`;
const Services = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  flex: 3;
`;
const Latest = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  flex: 4;
`;
const Head = styled.h3`
  margin-bottom: 0;
`;
const BnnerLIst = styled.ul`
  margin-top: 0;
  overflow: hidden;
  padding: 20px;
`;
const Items = styled.li`
  margin: 10px 0px;
  cursor: pointer;
  &:hover {
    color: rgb(170, 187, 217);
  }
`;
const Social = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
`;
const Media = styled.li`
  &:hover {
    color: red;
  }
  margin-right: 7px;
`;
const Copyright = styled.div`
  @media screen and (max-width: 768px) {
    visibility: hidden;
  }
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  color: rgb(119, 139, 174);
`;
const FooterBoxContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 140px;
  position: relative;
  display: flex;
  justify-content: center;
`;
const FooterBox = styled.div`
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    bottom: -10px;
  }
  display: flex;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  position: absolute;
  z-index: 5;
  width: 70%;
  height: 150px;
  background-color: white;
  border-radius: 20px;
  bottom: -30px;
`;
const BoxLeft = styled.div`
  @media screen and (max-width: 768px) {
    font-size: 22px;
    text-align: center;
    padding-bottom: 0;
  }
  padding: 15px;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;

  font-weight: 600;
  flex: 1;
`;
const BoxRight = styled.div`
  font-size: 18px;
  font-size: 800;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(119, 139, 174);
  flex: 1;
`;
const GetFreConsultancy = styled.a`
  @media screen and (max-width: 768px) {
    color: black;
    margin-top: 0;
  }
  margin-top: 10px;
  font-size: 17px;
  font-weight: 500;

  text-decoration: none;
  cursor: pointer;
  color: red;
`;
const BoxContent = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Footer = () => {
  return (
    <>
      <FooterBoxContainer>
        <FooterBox>
          <BoxLeft>
            Wish To Take Your Business<br></br> To The Next Level?
          </BoxLeft>
          <BoxRight>
            <BoxContent>
              {" "}
              Create Compelling Online Presence & Drive Sales With<br></br> The
              Best Digital Marketing Agency in Malappuram
            </BoxContent>

            <GetFreConsultancy href="https://wa.me/9946443551?text=Hello ZigZag">
              Get A Free Consultation
            </GetFreConsultancy>
          </BoxRight>
        </FooterBox>
      </FooterBoxContainer>
      <Container>
        <Wrapper>
          <Left>
            <Logo src={logo} />
            <Header>
              We’re Ready to Grow With You. Talk to an Expert Today.
            </Header>
            <Bottom>
              <Link
                to={"/contact"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                <GetButton>GET IN TOUCH</GetButton>
              </Link>

              <ContactInfo>
                <Contact>CALL US NOW</Contact>
                <Contact type="number">
                  {" "}
                  <a
                    style={{ color: "inherit", textDecoration: "none" }}
                    href="tel:123-456-7890"
                  >
                    +91 9946443551
                  </a>
                </Contact>
              </ContactInfo>
            </Bottom>
            <Social>
              <Media>
                {" "}
                <a
                  href="https://instagram.com/zig_zag_digital_solutions/"
                  target="blank"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {" "}
                  <InstagramIcon />
                </a>
              </Media>
              <Media>
                <a
                  href="https://www.facebook.com/ZIGZAGDigitalSolutions/"
                  target="blank"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <FacebookOutlinedIcon />
                </a>
              </Media>
              <Media>
                <a
                  href="https://www.linkedin.com/company/zig-zag-digital-solution-s"
                  target="blank"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <LinkedInIcon />
                </a>
              </Media>
              <Media>
                {" "}
                <TwitterIcon />
              </Media>
            </Social>
          </Left>
          <Right>
            <Company>
              <Head>Company</Head>
              <BnnerLIst>
                <Items>
                  <Link
                    to={"/"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Home
                  </Link>
                </Items>
                <Items>
                  <Link
                    to={"/service/corperate"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Service
                  </Link>
                </Items>
                <Items>
                  <Link
                    to={"/portfolio"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Portfolio
                  </Link>
                </Items>
                <Items>
                  <Link
                    to={"/blogs"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {" "}
                    Blog
                  </Link>
                </Items>
                <Items>
                  <Link
                    to={"/contact"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Contact Us
                  </Link>
                </Items>
                <Items>
                  <Link
                    to={"/about/data"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {" "}
                    About
                  </Link>
                </Items>
              </BnnerLIst>
            </Company>
            <Services>
              <Head>Services</Head>
              <BnnerLIst>
                <Items>
                  <Link
                    to={"/service/corperate"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Corporate identity
                  </Link>
                </Items>
                <Items>
                  <Link
                    to={"/service/social"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Social Media Marketing
                  </Link>
                </Items>
                <Items>
                  <Link
                    to={"/service/seo"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    SEO
                  </Link>
                </Items>
                <Items>
                  {" "}
                  <Link
                    to={"/service/webdev"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {" "}
                    Website Development
                  </Link>
                </Items>
                <Items>
                  {" "}
                  <Link
                    to={"/service/performence"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {" "}
                    Performance Marketing
                  </Link>
                </Items>
                <Items>
                  {" "}
                  <Link
                    to={"/service/corperate"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {" "}
                    Media Production
                  </Link>
                </Items>
              </BnnerLIst>
            </Services>
            <Latest>
              <Head>Latest Articles</Head>
              <BnnerLIst>
                <Items>
                  <Link
                    to={"/blogs/best-digital"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    we serve you the best digital 10 marketing agency in Kerala
                  </Link>
                </Items>
                <Items>
                  <Link
                    to={"/blogs/training"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Searching for the top digital marketing Training center in
                    Kerala? Look no further
                  </Link>
                </Items>
                <Items>
                  <Link
                    to={"/blogs/hunting"}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Are you Hunting for Malappuram’s Best Digital Marketing
                    Agency?
                  </Link>
                </Items>
                <Items>
                  <Link
                    to={"/blogs/Unlocking "}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Unlocking Organic Traffic: A Guide to Boosting Online
                    Visibility for Zig Zag Digital Marketing Agency in Manjeri,
                    Kerala
                  </Link>
                </Items>
              </BnnerLIst>
            </Latest>
          </Right>
        </Wrapper>
        <Copyright>
          © 2023 Zig Zag Digital Marketing Agency Manjeri. All rights reserved.
        </Copyright>
      </Container>
    </>
  );
};

export default Footer;
