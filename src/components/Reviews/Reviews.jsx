import React from "react";
import styled from "styled-components";
const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  background-color: white;
`;
const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  z-index: 5;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* width: 100%; */
`;
const Hider = styled.div`
  z-index: 5;
  position: absolute;
  width: 100%;
  background-color: white;
  height: 60px;
  bottom: 5px;
`;
const Reviews = () => {
  return (
    <Container>
      <Wrapper>
        <div className="elfsight-app-0b7c6bb4-9949-4806-be11-16fd0d99a75c"></div>
      </Wrapper>
      <Hider />
    </Container>
  );
};

export default Reviews;
