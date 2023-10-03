import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import contact from "../assets/contact/contact us digital marketing agency malappuram.png";

const Contaienr = styled.div``;
const Wrapper = styled.div`
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
  padding: 20px 70px;
  display: flex;
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
  height: 70%;
  padding: 20px;
  background-color: rgb(237, 127, 127);

  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;
const Field = styled.input`
  border: none;
  padding-left: 20px;
  font-size: 17px;
  margin: 10px 0px;
  width: 95%;
  height: 45px;
  border-radius: 10px;
`;
const SelectField = styled.select`
  border: none;
  padding-left: 20px;
  ///////
  -webkit-appearance: none;
  -moz-appearance: none;
  //////
  appearance: none;
  font-size: 17px;
  width: 100%;
  height: 45px;
  margin: 10px 0px;
  border-radius: 10px;
`;
const Option = styled.option``;
const TextArea = styled.textarea`
  padding: 6px;
  font-size: 17px;
  border: none;
  width: 99%;
  height: 70px;
  border-radius: 10px;
  margin: 10px 0px;
`;
const Button = styled.button`
  margin-top: 10px;
  padding: 15px 20px;
  width: 80px;
  border: none;
  border-radius: 10px;
  &:hover {
    transform: scale(1.07);
    color: red;
  }
`;
const Response = styled.div`
  @media only screen and (max-width: 768px) {
    right: 10px;
    bottom: 20px;
  }
  display: ${(props) => (props.status ? "flex" : "none ")};
  border: 1px solid green;
  background-color: #cdf6cd;
  padding: 5px 10px;
  bottom: 0;
  position: absolute;
  color: green;
  font-weight: 500;
  font-size: 20px;
`;
const Contact = () => {
  const [isResponse, setIsResponse] = useState(0);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uyx61ym",
        "template_ojwv1hv",
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
        <Left>
          <Image src={contact} />
        </Left>
        <Right>
          <ContactFormm ref={form} onSubmit={sendEmail}>
            <Field name="name" placeholder="Enter your name"></Field>
            <Field name="number" placeholder="Enter your mobile number"></Field>
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
              <Option>Other</Option>
            </SelectField>
            <SelectField name="enquiry">
              <Option>Enquiry on</Option>
              <Option>Full Digital Market Activity</Option>
              <Option>SEO</Option>
              <Option>Social Media Management</Option>
              <Option>Influvencer Marketing</Option>
              <Option>Paid Ads</Option>
              <Option>Website Development</Option>
              <Option>other</Option>
            </SelectField>
            <TextArea name="message"></TextArea>
            <Button>Submit</Button>
            <Response status={isResponse}>Thanks for your response</Response>
          </ContactFormm>
        </Right>
      </Wrapper>
    </Contaienr>
  );
};

export default Contact;
