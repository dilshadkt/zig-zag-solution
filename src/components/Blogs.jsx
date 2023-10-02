import React from "react";
import styled from "styled-components";
import blog1 from "../assets/latesBlog/A Guide to Boosting Online Visibility for Digital Marketing Agency in Kerala.jpg";
import blog2 from "../assets/latesBlog/Digital Marketing Agency Expert Strategies for  Businesses.jpeg";
import blog3 from "../assets/latesBlog/How To Digital Marketing Agency Helps Businesses Stay Ahead.jpg";
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
const Header = styled.h3`
  padding-top: 30px;
  font-weight: 500;
  color: grey;
  font-size: 27px;
`;
const BlogBox = styled.div`
  @media screen and (max-width: 768px) {
    margin: 50px 0;
  }
  margin: 70px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  padding: 0pc 10px;
  text-align: center;
  color: rgb(119, 139, 174);
  margin-top: 10px;
  font-size: 17px;
`;
const BLog = styled.div`
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    min-width: 100%;
  }
  flex: 1;
  overflow: hidden;
  border-radius: 20px;
  padding-bottom: 30px;
  background-color: rgb(252, 250, 250);
  max-width: 300px;
  min-width: 250px;
  /* min-height: 300px;  */
  margin: 5px;
  &:hover ${Content} {
    color: white;
    font-weight: 500;
  }
  &:hover {
    background-color: rgb(211, 206, 206);
  }
`;
const Image = styled.img`
  height: 200px;

  width: 100%;
  object-fit: cover;
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
const ImgaeContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Blogs = () => {
  return (
    <Container>
      <Wrapper>
        <Header>Blogs</Header>
        <BlogBox>
          <BLog>
            <ImgaeContainer>
              {" "}
              <Image src={blog1} />
            </ImgaeContainer>

            <Content>
              we serve you the best digital 10 marketing agency in Kerala
            </Content>
          </BLog>
          <BLog>
            <ImgaeContainer>
              {" "}
              <Image src={blog1} />
            </ImgaeContainer>

            <Content>
              we serve you the best digital 10 marketing agency in Kerala
            </Content>
          </BLog>
          <BLog>
            <ImgaeContainer>
              {" "}
              <Image src={blog2} />
            </ImgaeContainer>

            <Content>
              we serve you the best digital 10 marketing agency in Kerala
            </Content>
          </BLog>
          <BLog>
            <ImgaeContainer>
              {" "}
              <Image src={blog3} />
            </ImgaeContainer>

            <Content>
              we serve you the best digital 10 marketing agency in Kerala
            </Content>
          </BLog>
        </BlogBox>
        <ExploreBtn>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"blogs"}
          >
            Exploar More
          </Link>
        </ExploreBtn>
      </Wrapper>
    </Container>
  );
};

export default Blogs;
