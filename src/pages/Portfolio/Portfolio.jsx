import React from "react";
import styled from "styled-components";
import { Works } from "../../assets/Works/Works";
const Container = styled.div`
  background-color: white;
`;
const Wrapper = styled.div`
  @media only screen and (max-width: 390px) {
    padding: 20px;
  }
  display: flex;
  flex-direction: column;

  justify-content: center;
  padding: 20px 70px;
`;
const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const NavItems = styled.ul`
  @media only screen and (max-width: 390px) {
    margin: 0;
    padding: 0;
  }
  list-style: none;
  display: flex;
`;
const Item = styled.li`
  cursor: pointer;
  margin: 0px 15px;
  &:hover {
    color: red;
    font-weight: 500;
  }
`;
const Content = styled.div`
  @media only screen and (max-width: 390px) {
    margin: 50px 0;
  }
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin: 50px 10%;
`;
const Image = styled.img`
  width: 100%;

  min-width: 200px;
  min-height: 200px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
const ImageContainer = styled.div`
  @media only screen and (max-width: 390px) {
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
const Portfolio = () => {
  return (
    <Container>
      <Wrapper>
        <Navbar>
          <NavItems>
            <Item>ALL</Item>
            <Item>Brand Identity</Item>
            <Item>Social Media</Item>
          </NavItems>
        </Navbar>
        <Content>
          {Works.map((item, index) => (
            <ImageContainer key={index}>
              <Image src={item.image} />
            </ImageContainer>
          ))}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Portfolio;
