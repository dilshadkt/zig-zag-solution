import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import contact from "../assets/contact/contact us digital marketing agency malappuram.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import { Header } from "../pages/Service/Service";

const Contaienr = styled.div``;
const Wrapper = styled.div`
  @media only screen and (max-width: 768px) {
    /* flex-direction: column; */
    padding: 20px;
  }
  padding: 20px 70px;
  display: flex;
  flex-direction: column;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  position: relative;
`;
const Left = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
const ContactFormm = styled.form`
  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  width: 70%;
  height: 75%;
  padding: 20px;
  /* background-color: rgb(237, 127, 127); */

  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
const Field = styled.input`
  @media only screen and (max-width: 768px) {
    width: 93%;
  }
  border: 1px solid #ffcccb;
  padding-left: 20px;
  font-size: 17px;
  margin: 10px 0px;
  width: 95%;
  height: 50px;
  border-radius: 5px;
`;
const SelectField = styled.select`
  border: 1px solid #ffcccb;
  padding-left: 20px;
  ///////
  -webkit-appearance: none;
  -moz-appearance: none;
  //////
  appearance: none;
  font-size: 17px;
  width: 100%;
  height: 50px;
  margin: 10px 0px;
  border-radius: 5px;
`;
const Option = styled.option``;
const TextArea = styled.textarea`
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
  /* max-width: 98%; */
  padding: 6px;
  font-size: 17px;
  border: 1px solid #ffcccb;
  width: 98%;
  height: 70px;
  border-radius: 5px;
  margin: 10px 0px;
  resize: none;
`;
const Button = styled.button`
  margin-top: 10px;
  padding: 15px 20px;
  width: 80px;
  border: none;
  background-color: #ffcccb;
  border-radius: 10px;
  &:hover {
    transform: scale(1.07);
    color: red;
  }
`;

const Top = styled.div`
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  display: flex;
`;

const Bottom = styled.div`
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;
const BoxContainer = styled.div`
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }
  margin: 0% 10%;
  display: flex;
`;
const Box = styled.div`
  @media only screen and (max-width: 768px) {
    padding: 30px 20px;
    margin: 5px;
  }
  border-radius: 5px;
  margin: 10px;
  border: 1px solid #dedede;
  flex: 1;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Tittle = styled.h4`
  font-size: 17px;
  text-align: center;
  font-weight: 400;
  color: #6d6d6d;
`;
const Response = styled.span`
  color: green;
  font-size: 18px;
  font-weight: 500;
`;
const SubHeader = styled.span`
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
  margin-top: 15px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  color: rgb(119, 139, 174);
  font-weight: 500;
`;
const Contact = () => {
  const [isResponse, setIsResponse] = useState(0);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uyx61ym",
        "template_k438js2",
        form.current,
        "feYFFeEJ8N7t8b0ih"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsResponse(1);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Contaienr>
      <Wrapper>
        <Header>Contact</Header>
        <SubHeader>
          Please fill in the below form and wait for one of our experts to get
          back you
        </SubHeader>
        <Top>
          <Left>
            <Image src={contact} alt={contact} />
          </Left>
          <Right>
            <ContactFormm ref={form} onSubmit={sendEmail}>
              <Field name="name" placeholder="Enter your name"></Field>
              <Field
                name="number"
                placeholder="Enter your mobile number"
              ></Field>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email id"
              ></Field>
              <SelectField name="find-us">
                <Option>How did you find us?</Option>
                <Option>Instagram</Option>
                <Option>LinkedIn</Option>
                <Option>Twitter</Option>
                <Option>Youtube</Option>
                <Option>Google search</Option>
                <Option>Recommendation</Option>

                <Option>Other</Option>
              </SelectField>
              <SelectField name="enquiry">
                <Option>Enquiry on</Option>
                <Option>Full Digital Market Activity</Option>
                <Option>SEO</Option>
                <Option>Social Media Management</Option>
                <Option>Influencer Marketing</Option>
                <Option>Paid Ads</Option>
                <Option>Website Development</Option>
                <Option>other</Option>
              </SelectField>
              <SelectField name="budget">
                <Option>Select Your Budget</Option>
                <Option>Below 20,000 INR</Option>
                <Option> 20,000-50,000 INR</Option>
                <Option>50,000-100,000 INR</Option>
                <Option>Above 1Lakh INR</Option>
              </SelectField>
              <TextArea name="message"></TextArea>
              {isResponse ? (
                <Response>Thank for your response 👍</Response>
              ) : (
                <Button>Submit</Button>
              )}
            </ContactFormm>
          </Right>
        </Top>
        <Bottom>
          <BoxContainer>
            <Box>
              <LocationOnOutlinedIcon
                style={{ color: "tomato", fontSize: "59px" }}
              />
              <Tittle>
                {" "}
                THAR PLAZA, KACHERIPADI - PANDIKKAD RD BYPASS, MANJERI, KERALA
                676121
              </Tittle>
            </Box>
            <Box>
              <MailOutlineIcon style={{ color: "tomato", fontSize: "59px" }} />
              <Tittle> zigzagmpm@gmail.com</Tittle>
            </Box>
            <Box>
              {" "}
              <WifiCalling3OutlinedIcon
                style={{ color: "tomato", fontSize: "59px" }}
              />
              <Tittle> +91 994-644-3551</Tittle>
            </Box>
          </BoxContainer>
        </Bottom>
      </Wrapper>
    </Contaienr>
  );
};

export default Contact;
