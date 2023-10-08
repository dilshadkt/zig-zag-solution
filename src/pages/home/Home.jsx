import React from "react";
import styled from "styled-components";
import Branding from "../../assets/digital-market-agencies-malappuram-log.png";
import MoueScroll from "../../components/MoueScroll";
import AboutUs from "../../components/AboutUs";
import Portfolio from "../../components/Portfolio";
import Blogs from "../../components/Blogs";
import Serivice from "../../components/Serivice";
import WhyChoose from "../../components/WhyChoose";
import Reviews from "../../components/Reviews/Reviews";

const Container = styled.div`
  position: sticky;
  top: 75px;
  height: 90vh;
  background-color: rgb(219, 0, 47);
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Top = styled.div`
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    margin: 35px 20px;
  }
  height: 85%;
  margin: 30px 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  flex: 1;

  text-align: left;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  width: 90%;
  object-fit: cover;
`;
const Content = styled.div`
  @media screen and (max-width: 768px) {
    font-size: 30px;
    margin-left: 0;
    margin-right: 0;
  }

  /* line-height: 45px; */
  margin-left: 75px;
  margin-right: 30px;
  color: white;
  font-size: 50px;
`;
const ContentHead = styled.h1`
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  font-size: 50px;
  line-height: 45px;
  font-weight: 300;
`;
const Bottom = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  background-color: yellow;
`;
const Description = styled.div`
  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-top: 15px;
  }
  font-size: 17px;
  margin-top: 20px;
  line-height: 20px;
`;

const Home = () => {
  return (
    <>
      <Container id="home">
        <Wrapper>
          <Top>
            <Left>
              <Content>
                <ContentHead>
                  {" "}
                  A Comprehensive Branding & Digital Marketing Agency in&nbsp;
                  <b>Malappuram!</b>
                </ContentHead>

                <Description>
                  Digital Marketing Company in Malappuram providing <br />
                  result-oriented marketing solutions for brands since 2020.{" "}
                </Description>
              </Content>
            </Left>
            <Right>
              <Image src={Branding} alt={Branding} />
            </Right>
          </Top>
          <Bottom>
            <MoueScroll />
          </Bottom>
        </Wrapper>
      </Container>
      <AboutUs />
      <WhyChoose />
      <Blogs />
      <Serivice />
      <Portfolio />
      <Reviews />
    </>
  );
};

export default Home;
