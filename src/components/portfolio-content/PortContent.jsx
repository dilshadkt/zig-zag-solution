import React from "react";
import styled from "styled-components";
import { Works } from "../../assets/Works/Works";
import { useParams } from "react-router-dom";
const Content = styled.div`
  @media only screen and (max-width: 768px) {
    margin: 50px 0;
  }

  justify-content: center;
  display: flex;
  flex-wrap: wrap;

  margin: 50px 10%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  min-width: 200px;
  min-height: 200px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;
const ImageContainer = styled.div`
  @media only screen and (max-width: 768px) {
    width: 30%;
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
const PortContent = () => {
  let { status } = useParams();
  status === undefined && (status = "all");
  return (
    <Content>
      {Works.map((item, index) =>
        status === "all" ? (
          <ImageContainer key={index}>
            <Image src={item.image} alt={item.image} />
          </ImageContainer>
        ) : (
          item.status === status && (
            <ImageContainer key={index}>
              <Image src={item.image} alt={item.image} />
            </ImageContainer>
          )
        )
      )}
    </Content>
  );
};

export default PortContent;
