import React from "react";
import styled from "styled-components";
import { BlogsData } from "../../assets/latesBlog/LatesBlog";

const Container = styled.div``;
const Wrapper = styled.div`
  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
  padding: 20px 70px;
`;
const Header = styled.h3`
  width: 100%;
  text-align: center;
  padding-top: 30px;
  font-weight: 500;
  color: grey;
  font-size: 27px;
`;
const Content = styled.div`
  @media only screen and (max-width: 768px) {
    margin: 50px 0;
  }
  margin: 50px 10%;
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: center;
`;
const Blog = styled.div`
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
  padding-bottom: 30px;
  background-color: rgb(252, 250, 250);
  max-width: 300px;
  min-width: 250px;
  margin: 10px;
  &:hover ${Content} {
    color: white;
    font-weight: 500;
  }
  &:hover {
    background-color: rgb(211, 206, 206);
  }
`;
const Image = styled.img`
  height: 250px;

  width: 100%;
  object-fit: cover;
`;
const ImgaeContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h3`
  padding: 0px 10px;
  color: rgb(119, 139, 174);
  font-weight: 500;
  text-align: center;
`;
const Descrption = styled.div`
  padding: 0px 10px;
  text-align: justify;
`;
const ReadMore = styled.span`
  text-align: center;
  width: 100%;
  color: red;
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
`;
const Blogs = () => {
  return (
    <Container>
      <Wrapper>
        <Header>Blogs</Header>
        <Content>
          {BlogsData.map((item, index) => (
            <Blog key={index}>
              <ImgaeContainer>
                <Image src={item.image} />
              </ImgaeContainer>
              <Title>{item.title}</Title>
              <Descrption>{item.desc}</Descrption>
              <ReadMore>Read More</ReadMore>
            </Blog>
          ))}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Blogs;
