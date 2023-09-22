import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  opacity: 50%;
  height: 55px;
`;
const Mousey = styled.div`
  width: 3px;
  padding: 5px 10px;
  height: 35px;
  border: 2px solid white;

  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
`;
const Scroller = styled.div`
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #fff;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: infinite;

  @keyframes scroll {
    0% {
      opacity: 0;
    }
    10% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(15px);
      opacity: 0;
    }
  }
`;
const MoueScroll = () => {
  return (
    <Container>
      <Mousey>
        <Scroller></Scroller>
      </Mousey>
    </Container>
  );
};

export default MoueScroll;
