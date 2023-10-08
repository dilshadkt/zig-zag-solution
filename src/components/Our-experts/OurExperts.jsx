import React, { useState, useEffect } from "react";
import data from "../../assets/our-expert/data";
import styled from "styled-components";

const Container = styled.div`
  width: 90vw;
  margin: 5rem auto;
  max-width: 1170px;
  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;
const Title = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;
const TitleContent = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;
const Reivew = styled.span`
  color: rgb(119, 139, 174);
  font-size: 0.85em;

  margin-right: 1rem;
  font-weight: 700;
`;
const Center = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  width: 80vw;

  height: 300px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
`;
const Img = styled.img`
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid hsl(210, 31%, 80%);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;
const Box = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: ${(props) => props.status === "activeSlide" && "translateX(0)"};
  transform: ${(props) => props.status === "lastSlide" && "translateX(-100%)"};
  transform: ${(props) => props.status === "nextSlide" && "translateX(100%)"};
  opacity: ${(props) => props.status === "activeSlide" && 1};

  transition: all 0.3s linear;
`;
const Name = styled.h4`
  font-size: 18px;
`;
const Desc = styled.p`
  font-weight: 500;
  color: rgb(119, 139, 174);
`;
function App() {
  // const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <Container>
      <Title>
        <TitleContent>
          <Reivew>Our experts</Reivew>
        </TitleContent>
      </Title>
      <Center>
        {data.map((person, personIndex) => {
          const { id, image, name, title } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === data.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <Box key={id} status={position}>
              <Img src={image} alt={name} />
              <Name>{name}</Name>
              <Desc>{title}</Desc>
            </Box>
          );
        })}
      </Center>
    </Container>
  );
}

export default App;
