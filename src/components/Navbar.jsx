import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logoimg from "../assets/logo.png";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo from "../assets/digital-market-agency-in-malappuram.png";
import { Link } from "react-router-dom";
import home from "../assets/nav-mobile/home Digital-Marketing-Malappuram.png";
import about from "../assets/nav-mobile/About Digital-Marketing-Malappuram.png";
import service from "../assets/nav-mobile/services  Digital-Marketing-Malappuram.png";
import works from "../assets/nav-mobile/works Digital-Marketing-Malappuram.png";
import contact from "../assets/nav-mobile/contact Digital-Marketing-Malappuram.png";
const Container = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: transparent;
  width: 100%;
  height: 75px;
  transition: all 0.7s ease;
  color: ${(props) => (props.value ? "black" : "white")};
  background-color: ${(props) =>
    props.value ? "transparent" : " rgb(219, 0, 47)"};
`;
const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding: 0px 20px;
  }
  height: 100%;
  display: flex;
  padding: 0px 60px;
  justify-content: space-between;
`;
const Left = styled.div`
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.value ? "none" : "")};
  }
  display: flex;
  align-items: center;
  justify-content: flex-start;

  flex: 3;
`;
const Center = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  background-color: ${(props) => (props.value ? "white" : "transparent")};
  opacity: 80%;
  border-radius: 15px;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  flex: 4;
`;
const Right = styled.div`
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.value ? "none" : "")};
  }
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Logo = styled.img`
  width: 100px;
`;

const ContactIcon = styled.div``;
const Item = styled.li`
  .active {
    color: red;
    font-weight: 700;
  }
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
`;
const NavItems = styled.ul`
  font-weight: 500;
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

const Whatssap = styled.a`
  @media screen and (max-width: 768px) {
    bottom: 100px;
  }
  color: white;
  background-color: rgb(37, 211, 102);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  &:hover {
    transform: scale(1.1);
  }
`;
const MobileNav = styled.div`
  @media screen and (max-width: 768px) {
    visibility: visible;
  }
  visibility: hidden;
  width: 100%;
  height: 70px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 20px;
`;
const NavBar = styled.div`
  width: 93%;
  height: 100%;
  background-color: white;
  display: flex;
  box-shadow: 15px 15px 15px -15px #464545;
  border-radius: 15px;
  /* opacity: 80%; */
`;
const ServiceOption = styled.div`
  visibility: ${(props) => (props.status ? "visible" : "hidden")};
  border-radius: 10px;
  position: absolute;
  color: black;
  background-color: white;
`;

const ServiceItems = styled.ul`
  list-style: none;
  padding: 0;
`;
const ServiceItem = styled.li`
  margin: 15px 10px;
  &:hover {
    color: red;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: red;
  flex: 1;
`;
const Icon = styled.img`
  width: 20px;
`;
const TItle = styled.p`
  margin: 0;
  margin-top: 5px;
  font-size: 13px;
`;
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 700) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container value={scrolled}>
      <Wrapper>
        <Left value={scrolled}>
          <Logo src={scrolled ? logo : logoimg} />
        </Left>
        <Center value={scrolled}>
          <NavItems>
            <Item>
              <Link
                to={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Home
              </Link>
            </Item>
            <Item>
              {" "}
              <Link
                to={"about/data"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                About
              </Link>
            </Item>
            <Item onMouseEnter={() => setIsOpen(1)}>
              <Link style={{ textDecoration: "none", color: "inherit" }}>
                Service
              </Link>
              <ServiceOption status={isOpen} onMouseLeave={() => setIsOpen(0)}>
                <ServiceItems>
                  <ServiceItem>
                    <Link
                      to={"/service/corperate"}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Corporate Branding
                    </Link>{" "}
                  </ServiceItem>
                  <ServiceItem>
                    <Link
                      to={"/service/social"}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Social Media Marketing
                    </Link>{" "}
                  </ServiceItem>
                  <ServiceItem>
                    <Link
                      to={"/service/seo"}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      SEO
                    </Link>{" "}
                  </ServiceItem>
                  <ServiceItem>
                    <Link
                      to={"/service/webdev"}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Website Development
                    </Link>{" "}
                  </ServiceItem>
                  <ServiceItem>
                    <Link
                      to={"/service/performence"}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Performance Marketing
                    </Link>
                  </ServiceItem>
                  <ServiceItem>
                    <Link
                      to={"/service/media"}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Media Production
                    </Link>
                  </ServiceItem>
                </ServiceItems>
              </ServiceOption>
            </Item>
            <Item>
              <Link
                to={"portfolio"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Portfolio
              </Link>
            </Item>
            <Item>
              <Link
                to={"blogs"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Blogs
              </Link>
            </Item>

            <Item>
              <Link
                to={"contact"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Contact
              </Link>
            </Item>
          </NavItems>
        </Center>
        <Right value={scrolled}>
          <ContactIcon>
            <Link
              to={"/contact"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <PersonOutlinedIcon />
            </Link>
          </ContactIcon>
        </Right>
      </Wrapper>
      <Whatssap href="https://wa.me/9946443551?text=Hello ZigZag">
        <WhatsAppIcon />
      </Whatssap>
      <MobileNav>
        <NavBar>
          <Box>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "inherit",
                textAlign: "center",
              }}
            >
              <Icon src={home} />

              <TItle> Home</TItle>
            </Link>
          </Box>
          <Box>
            {" "}
            <Link
              to={"about/data"}
              style={{
                textDecoration: "none",
                color: "inherit",
                textAlign: "center",
              }}
            >
              <Icon src={about} />
              <TItle> About</TItle>
            </Link>
          </Box>
          <Box>
            <Link
              to={"/service/corperate"}
              style={{
                textDecoration: "none",
                color: "inherit",
                textAlign: "center",
              }}
            >
              <Icon src={service} />
              <TItle>Service</TItle>
            </Link>
          </Box>
          <Box>
            {" "}
            <Link
              to={"portfolio"}
              style={{
                textDecoration: "none",
                color: "inherit",
                textAlign: "center",
              }}
            >
              <Icon src={works} />
              <TItle>Portfolio</TItle>
            </Link>
          </Box>
          <Box>
            <Link
              to={"contact"}
              style={{
                textDecoration: "none",
                color: "inherit",
                textAlign: "center",
              }}
            >
              <Icon src={contact} />
              <TItle> Contact</TItle>
            </Link>
          </Box>
        </NavBar>
      </MobileNav>
    </Container>
  );
};

export default Navbar;
