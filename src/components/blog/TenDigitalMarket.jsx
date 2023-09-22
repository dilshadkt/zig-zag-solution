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
const Header = styled.h1`
  color: red;
`;
const Content = styled.div`
  font-size: 20px;
  margin: 20px;
`;
const Description = styled.h3`
  margin-top: 20px;
  font-weight: 400;
`;
const Items = styled.ol``;
const Item = styled.li`
  color: red;
  font-weight: 500;
`;
const Blog = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={bgimage} />
        <Header>
          We Serve You The Best Digital 10 Marketing Agency In Kerala
        </Header>
        <Content>
          are you tired of looking best digital marketing agency in Kerala,
          don’t worry we will be with you. We are sharing here the best 10
          digital marketing agencies in Kerala
          <Items>
            <Item> list of best 10 digital marketing agencies in Kerala</Item>
            <Item> why use digital marketing in the present time</Item>
            <Item>
              How to affect digital marketing in different areas of any business
            </Item>
            <Item>share with us your doubt related to Digital Marketing</Item>
            <Item>share with us your doubt related to Digital Marketing</Item>
          </Items>
          <Items>
            <Item>list of best 10 digital marketing agencies in Kerala</Item>
            <Items>
              <Item>Zig zag Digital digital solution</Item>
              <Item>Haris&co.</Item>
              <Item>Viral mafia</Item>
              <Item> web dura technology</Item>
              <Item> OREXIS Digital Marketing Company</Item>
              <Item> ZainCo Digital Marketing & Design Agency</Item>
              <Item>AB Digital</Item>
              <Item>WATERMELON ADS</Item>
              <Item>Blusteak Media</Item>
            </Items>
            <Item>why use digital marketing in the present time</Item>
            <Description>
              In today’s world, digital marketing is like a superpower for
              businesses. Imagine the internet as a big playground where lots of
              people hang out. Digital marketing helps businesses join the fun
              and talk directly to these people. It’s like having a magic wand
              to find the exact people who would love what you offer. And guess
              what? You can see how well your magic is working by checking
              numbers that tell you what’s happening.
            </Description>
            <Description>
              {" "}
              Plus, it’s not super expensive, and you can change your strategies
              whenever you want. You can even make friends from all over the
              world! Digital marketing makes your business cool, popular, and
              smart, all at once. So, if you want your business to shine and
              grow, digital marketing is the way to go!
            </Description>
            <Item>
              How to affect digital marketing in different areas of any
              business?
            </Item>
            <Description>
              Digital marketing has a profound impact across all areas of
              business. In sales, it drives revenue by optimizing online
              visibility through SEO and PPC advertising. Customer engagement is
              revolutionized through real-time interaction on social media,
              emails, and content creation, fostering loyalty. Market research
              benefits from data-driven insights obtained through tools like
              Google Analytics, refining products and strategies. Branding is
              strengthened by shaping a compelling online persona and building
              credibility and trust.
            </Description>
            <Description>
              Financially, digital marketing offers cost-effective alternatives
              to traditional advertising, leveling the field for small
              businesses. Operational efficiency is boosted as supply chain
              management aligns with online demand trends. Customer service
              gains efficiency with instant responses on social media and
              chatbots. Even talent acquisition benefits, as an appealing online
              presence attracts top talent. In summary, digital marketing’s
              influence is far-reaching. It propels revenue, shapes brand
              identity, fosters customer loyalty, refines strategies through
              data, and enhances operational efficiency. Its power lies in
              adapting to changing business landscapes and fostering growth
              across the board.
            </Description>
            <Item>share with us your doubt related to Digital Marketing</Item>
            <Description>
              Hey there! Today’s a bit different because I want to hear from
              YOU. What’s puzzling you about digital marketing? Whether it’s
              social media, getting noticed on Google, or creating online
              content,
            </Description>
            <Description>
              I’m here to help. Drop your thoughts in the comments – no question
              is too small. Let’s learn together and have a chat. Your question
              might even help others wondering the same thing. Stay curious and
              let’s dive into the world of digital marketing
            </Description>
          </Items>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Blog;
