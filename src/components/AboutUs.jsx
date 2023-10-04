import React, { useState } from "react";
import styled from "styled-components";
import About from "../assets/about.png";
import Aboutus from "../assets/About Us.png";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  background-color: white;
`;
const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding: 0px 20px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px ${(props) => (props.padSize === "data" ? 20 : 70)}px;
  padding-bottom: 20px;
  position: relative;
`;

const Image = styled.img`
  width: 50%;
`;
const Header = styled.h3`
  font-weight: 500;
  color: grey;
  font-size: 27px;
`;
const Content = styled.span`
  @media screen and (max-width: 768px) {
    text-align: justify;
    width: 100%;
    font-size: 18px;
  }
  margin-bottom: 30px;
  width: 70%;
  text-align: ${(props) => (props.textAlign === "data" ? "justify" : "left")};
  line-height: 30px;
  font-size: 20px;
`;
const BrandTalk = styled.h2``;
const Bottom = styled.div`
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  display: flex;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  z-index: 5;

  flex: 1;
`;
const RightContent = styled.div`
  @media screen and (max-width: 768px) {
    align-items: center;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const ReadButton = styled.div`
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
  cursor: pointer;
  color: grey;
  padding: 10px 40px;
  border: 1px double black;
  &:hover {
    border-color: orange;
    color: black;
    font-weight: 500;
  }
`;
const Hight = styled.span`
  color: #ff0000;
  font-weight: 500;
`;
const AboutBackground = styled.img`
  @media screen and (max-width: 768px) {
    transform: scale(1);
    transform: translateX(100px);
    top: 45%;
  }
  bottom: 20%;
  width: 100%;
  z-index: -1;
  position: absolute;
  opacity: 40%;
`;
const AboutUs = () => {
  const [more, setMore] = useState(0);
  const { status } = useParams();
  function RedMore(x) {
    setMore(x);
  }

  return (
    <>
      <Container id="about">
        <Helmet>
          <title>
            Zig Zag - Transforming Brands with Creative Digital Marketing
            Solutions in Malappuram
          </title>
          <meta
            name="description"
            content={
              "Join our extraordinary journey as the top digital marketing agency in Malappuram. Discover our passion and client-centric approach that turns visions into success."
            }
          />
          <meta
            name="keywords"
            content="Digital Marketing, Malappuram, Creative Solutions, Business Growth, Brand Transformation, Global Services, Client-Centric Approach.
"
          />
          <meta
            property="og:title"
            content={
              "Zig Zag - Creative Digital Marketing Agency in Malappuram"
            }
          />
          <meta
            property="og:description"
            content={
              "Choose Zig Za as your dedicated digital marketing partner for transforming ideas into successful brands. We offer innovative digital marketing solutions that go beyond conventional methods."
            }
          />
        </Helmet>
        <Wrapper padSize={status}>
          <Header>About Us</Header>
          <Bottom>
            <Left>
              <Image src={About} />
            </Left>
            <Right>
              <RightContent>
                {/* <BrandTalk status={status}></BrandTalk> */}
                <Content textAlign={status}>
                  {status === "data" ? (
                    <>
                      The story that leads us on the extraordinary journey of
                      uplifting brands to new heights as their digital marketing
                      company encompasses passion, perseverance and relentless
                      pursuit of turning vision into success! We understood our
                      collective strength after working together as a group of
                      freelance digital marketers from different corners of the
                      world. With the challenges we faced, the opportunities we
                      seized and the lessons we learned, our determination was
                      stronger than ever to build a digital marketing agency in
                      Malappuram that provided global services to brands. About
                      Us The story that leads us on the extraordinary journey of
                      uplifting brands to new heights as their digital marketing
                      company encompasses passion, perseverance and relentless
                      pursuit of turning vision into success! We understood our
                      collective strength after working together as a group of
                      freelance digital marketers from different corners of the
                      world
                      {more ? (
                        <div>
                          . With the challenges we faced, the opportunities we
                          seized and the lessons we learned, our determination
                          was stronger than ever to build a digital marketing
                          agency in Malappuram that provided global services to
                          brands. Our journey is a testament to what
                          determination and unwavering commitment can lead us.
                          Client Centric and Result-Oriented approach with
                          Innovative and creative thinking helped us surpass the
                          expectations of our esteemed clients each time. Rather
                          than a digital marketing agency, we strive to be your
                          business growth partner that helps you every step of
                          the way with creative solutions and strategic
                          brilliance till you achieve your goals.
                        </div>
                      ) : (
                        <div
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={() => RedMore(1)}
                        >
                          Read more...
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      {" "}
                      At <Hight>Zig Zag</Hight>, we believe the “Road To Success
                      Is Not A Straight One,” hence the name. As your trusted
                      Digital Marketing Agency in Malappuram, we want to be the
                      driving force that turns your business ideas and dreams
                      into reality.
                    </>
                  )}
                </Content>
                <Content textAlign={status}>
                  {status === "data" ? (
                    <>
                      {more ? (
                        <>
                          Zig zag is where creative minds meet, collaborate and
                          flourish. They are the driving force behind our
                          client’s success. From a one-person show, we have
                          transformed ourselves into one of Malappuram's best
                          digital marketing companies by bringing together ideas
                          and creating success stories.
                          <div
                            style={{ color: "red", cursor: "pointer" }}
                            onClick={() => RedMore(0)}
                          >
                            Read Less ^
                          </div>
                        </>
                      ) : null}
                    </>
                  ) : (
                    <>
                      If you are looking for a digital marketing company for
                      your business to take over the ever-evolving digital
                      platforms and establish a compelling online presence, you
                      have come to the right place. We provide comprehensive
                      digital marketing and branding solutions that suit you
                      best.
                    </>
                  )}
                </Content>
                {!status && (
                  <Link
                    style={{ color: "inherit", textDecoration: "none" }}
                    to={"/about/data"}
                  >
                    {" "}
                    <ReadButton>Read Our Story </ReadButton>
                  </Link>
                )}

                <AboutBackground src={Aboutus} />
              </RightContent>
            </Right>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default AboutUs;
