import React from "react";
import styled from "styled-components";
import contact from "../assets/contact/contact us digital marketing agency malappuram.png";

const Contaienr = styled.div``;
const Wrapper = styled.div`
  padding: 20px 70px;
  display: flex;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;
const Left = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
const ContactFormm = styled.form`
  width: 70%;
  height: 70%;
  padding: 20px;
  background-color: rgb(229, 228, 228);
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
  font-size: 17px;
  width: 100%;
  height: 45px;
  margin: 10px 0px;
  border-radius: 10px;
`;
const Option = styled.option``;
const TextArea = styled.textarea`
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
const Contact = () => {
  return (
    <Contaienr>
      <Wrapper>
        <Left>
          <Image src={contact} />
        </Left>
        <Right>
          <ContactFormm>
            <Field placeholder="Enter your name"></Field>
            <Field placeholder="Enter your mobile number"></Field>
            <Field type="email" placeholder="Enter your email id"></Field>
            <SelectField>
              <Option>How did you find us?</Option>
              <Option>Instagram</Option>
              <Option>LinkedIn</Option>
              <Option>Twitter</Option>
              <Option>Youtube</Option>
              <Option>Google search</Option>
              <Option>Other</Option>
            </SelectField>
            <SelectField>
              <Option>Enquiry on</Option>
              <Option>Full Digital Market Activity</Option>
              <Option>SEO</Option>
              <Option>Social Media Management</Option>
              <Option>Influvencer Marketing</Option>
              <Option>Paid Ads</Option>
              <Option>Website Development</Option>
              <Option>other</Option>
            </SelectField>
            <TextArea></TextArea>
            <Button>Submit</Button>
          </ContactFormm>
        </Right>
      </Wrapper>
    </Contaienr>
  );
};

export default Contact;
