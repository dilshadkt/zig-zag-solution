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

  margin-top: 10px;
  font-weight: 500;
  width: 75%;
  color: rgb(119, 139, 174);
  font-size: 24px;
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
const Footer = () => {
  return (
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
              <Contact type="number"> +91 9946443551</Contact>
            </ContactInfo>
          </Bottom>
          <Social>
            <Media>
              {" "}
              <a
                href="https://www.instagram.com/dilshad/"
                target="blank"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {" "}
                <InstagramIcon />
              </a>
            </Media>
            <Media>
              <a
                href="https://www.facebook.com/QuaFootSpa/"
                target="blank"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <FacebookOutlinedIcon />
              </a>
            </Media>
            <Media>
              <a
                href="https://www.linkedin.com/in/your-profile-link"
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
              <Items>Contact Us</Items>
              <Items>
                <Link
                  to={"/about"}
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
              <Items>Corporate identity</Items>
              <Items>UI/UX Design</Items>
              <Items>Brand Promotion</Items>
              <Items>Full Developement</Items>
              <Items>Photo & Print</Items>
            </BnnerLIst>
          </Services>
          <Latest>
            <Head>Latest Articles</Head>
            <BnnerLIst>
              <Items>
                are you tired of looking best digital marketing agency in
                Kerala, don't worry we will be August 16, 2023
              </Items>
              <Items>
                Introduction: In the vibrant business landscape of Manjeri,
                Kerala, staying ahead in the
              </Items>
            </BnnerLIst>
          </Latest>
        </Right>
      </Wrapper>
      {/* <Announcer /> */}
    </Container>
  );
};

export default Footer;
