import React from "react";
import styled from "styled-components";
import { Works } from "../../assets/Works/Works";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Wrappper = styled.div`
  @media only screen and (max-width: 768px) {
    padding: 20px;
    margin: 0;
  }
  padding: 20px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0px ${(props) => props.status === "aboutus" && 12}%;
  margin: 0px ${(props) => props.status === "service" && 10}%;
`;
const BoxContianer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Box = styled.div`
  @media only screen and (max-width: 768px) {
    width: 20%;
    margin: 5px;
  }
  display: flex;
  align-items: center;
  justify-content: center;

  width: 23%;

  margin: 5px;
  border-radius: 10px;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;

  &:hover {
    transform: scale(1.03);
  }
  transition: all 0.5s ease;
`;
const ExploreMore = styled.span`
  margin: 15px;
  color: red;
  cursor: pointer;
`;
const Head = styled.h4`
  font-size: 18px;
  width: 100%;
  text-align: left;
`;
const AdPortfolio = ({ status }) => {
  const filtered = Works.slice(0, 4);
  return (
    <Container>
      <Wrappper status={status}>
        <Head>Our Recent Works</Head>
        <BoxContianer>
          {filtered.map((item, index) => (
            <Box key={index}>
              <Image src={item.image} alt={item.image} />
            </Box>
          ))}
        </BoxContianer>
        <ExploreMore>
          {" "}
          <Link
            to={"/portfolio"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Explore More
          </Link>{" "}
        </ExploreMore>
      </Wrappper>
    </Container>
  );
};

export default AdPortfolio;
