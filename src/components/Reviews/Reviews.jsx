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
  z-index: 5;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Hider = styled.div`
  z-index: 10;
  position: absolute;
  width: 100%;
  background-color: #ffffff;
  height: 45px;
  /* left: 43%; */
  bottom: 5px;
`;
const Reviews = () => {
  return (
    <Container>
      <Wrapper>
        <div class="elfsight-app-0b7c6bb4-9949-4806-be11-16fd0d99a75c"></div>
      </Wrapper>
      <Hider />
    </Container>
  );
};

export default Reviews;
