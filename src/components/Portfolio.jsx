import React from "react";
import styled from "styled-components";
import { Works } from "../assets/data/Works";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: white;
  position: relative;
`;
const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  padding: 20px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  padding-top: 30px;
  font-weight: 500;
  color: grey;
  font-size: 27px;
`;
const Content = styled.div`
  @media screen and (max-width: 768px) {
    margin: 50px 0px;
  }
  margin: 50px 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
`;
const Image = styled.img`
  @media screen and (max-width: 768px) {
    min-width: 140px;
    min-height: 100px;
    height: 150px;
  }
  min-width: 200px;
  min-height: 200px;
  height: 100%;
  width: 100%;
  transition: all 0.5s ease-out;
  &:hover {
    transform: scale(1.04);
  }
`;
const ImageContainer = styled.div`
  @media screen and (max-width: 768px) {
    width: 45%;
    min-width: 140px;
    min-height: 100px;
    height: 150px;
    border-radius: 10px;
  }
  width: 30%;
  min-width: 200px;
  min-height: 200px;
  border-radius: 20px;
  overflow: hidden;
  margin: 5px;
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

const Portfolio = () => {
  return (
    <Container>
      <Wrapper>
        <Header>Portfolio</Header>
        <Content>
          {Works.map(
            (item, index) =>
              item.category === "pinned" && (
                <ImageContainer key={index}>
                  {" "}
                  <Image src={item.image} />
                </ImageContainer>
              )
          )}
        </Content>
        <ExploreBtn>
          <Link
            to={"portfolio"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Exploar More
          </Link>
        </ExploreBtn>
      </Wrapper>
    </Container>
  );
};

export default Portfolio;
