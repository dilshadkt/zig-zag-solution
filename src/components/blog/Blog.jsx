import React from "react";
import styled from "styled-components";
import bgimage from "../../assets/latesBlog/A Guide to Boosting Online Visibility for Digital Marketing Agency in Kerala.jpg";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 70px;
  margin: 0px 12%;
`;
const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 20px;
`;
const Blog = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={bgimage} />
      </Wrapper>
    </Container>
  );
};

export default Blog;
