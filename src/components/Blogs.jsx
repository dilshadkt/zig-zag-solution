import React from "react";
import styled from "styled-components";
import blog1 from "../assets/latesBlog/Digital Marketing Agency Proven Strategies for Online Success.jpg";
import blog2 from "../assets/latesBlog/Digital Marketing Agency Expert Strategies for  Businesses.jpeg";
import blog3 from "../assets/latesBlog/How To Digital Marketing Agency Helps Businesses Stay Ahead.jpg";
import blog4 from "../assets/latesBlog/A Guide to Boosting Online Visibility for Digital Marketing Agency in Kerala.jpg";
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
  width: 100%;
  margin: 70px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Content = styled.div`
  padding: 0px 10px;
  text-align: center;
  color: rgb(119, 139, 174);
  margin-top: 13px;
  font-size: 17px;
`;
const BLog = styled.div`
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    width: 100%;
    max-width: 320px;
  }
  /* height: 270px; */
  flex: 1;
  overflow: hidden;
  border-radius: 20px;
  padding-bottom: 20px;
  background-color: rgb(252, 250, 250);
  max-width: 300px;
  min-width: 250px;
  cursor: pointer;
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
  height: 100%;
  /* transform: scale(1.1); */
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
  height: 200px;
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
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              to={"/blogs/best-digital"}
            >
              <ImgaeContainer>
                {" "}
                <Image src={blog4} />
              </ImgaeContainer>

              <Content>
                we serve you the best 10 digital marketing agency in Kerala
              </Content>
            </Link>
          </BLog>
          <BLog>
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              to={"/blogs/training"}
            >
              <ImgaeContainer>
                {" "}
                <Image src={blog1} />
              </ImgaeContainer>

              <Content>
                Searching for the top digital marketing Training center in
                Kerala? Look no further
              </Content>
            </Link>
          </BLog>
          <BLog>
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              to={"/blogs/hunting"}
            >
              <ImgaeContainer>
                {" "}
                <Image src={blog2} />
              </ImgaeContainer>

              <Content>
                Are you Hunting for Malappuram’s Best Digital Marketing Agency?
              </Content>
            </Link>
          </BLog>
          <BLog>
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              to={"/blogs/Unlocking"}
            >
              <ImgaeContainer>
                {" "}
                <Image src={blog3} />
              </ImgaeContainer>

              <Content>
                Unlocking Organic Traffic: A Guide to Boosting Online Visibility
                for Zig Zag Digital Marketing Agency in Manjeri, Kerala
              </Content>
            </Link>
          </BLog>
        </BlogBox>
        <ExploreBtn>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"blogs"}
          >
            Explore More
          </Link>
        </ExploreBtn>
      </Wrapper>
    </Container>
  );
};

export default Blogs;
