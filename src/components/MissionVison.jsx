import React from "react";
import styled from "styled-components";
import Vision from "../assets/data/vision/vission digital marketing agency malappuram.png";
import Missionbg from "../assets/data/vision/mission digital marketing agency malappuram (1).png";

const Container = styled.div``;
const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  padding: 20px 70px;
`;
const Mission = styled.div`
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  display: flex;
  margin: 0px 30px;
`;
const MissionLetf = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;
const MissionRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;
const VissionLeft = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  /* background-color: red; */
`;
const Vission = styled.div`
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
  display: flex;
  justify-content: center;
`;
const VissionRight = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 40%;
`;
const Logo = styled.img`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  width: 50%;
  object-fit: cover;
  transition: all 1s ease;
  &:hover {
    transform: rotate(10deg);
  }
`;
const Head = styled.h3`
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
  font-size: 30px;
  color: rgb(119, 139, 174);
`;
const Desc = styled.span`
  @media screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    width: 100%;
  }
  font-size: 25px;
  width: 60%;
  word-spacing: 0px;
  text-align: left;
`;
const MissionVison = () => {
  return (
    <Container>
      <Wrapper>
        <Mission>
          <MissionLetf>
            <Logo src={Vision} />
          </MissionLetf>
          <MissionRight>
            <Head>Our Mission</Head>
            <Desc>
              To be the best Digital marketing agency in Malappuram that
              transforms business ideas to successful brands.
            </Desc>
          </MissionRight>
        </Mission>
        <Vission>
          <VissionRight>
            <Head>Our Vission</Head>
            <Desc>
              To be a Global Digital Marketing Company and change the digital
              marketing realm beyond boundaries.
            </Desc>
          </VissionRight>
          <VissionLeft>
            <Logo src={Missionbg} />
          </VissionLeft>
        </Vission>
      </Wrapper>
    </Container>
  );
};

export default MissionVison;
