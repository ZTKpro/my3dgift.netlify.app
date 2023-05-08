import React, { useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.section`
  margin: 40px auto;
  max-width: 1200px;
`;

const StyledTitle = styled.h1`
  margin-top: 50px;
  font-size: 62px;
  background-image: linear-gradient(180deg, #4ef9fe 0%, #0696ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

const StyledDescription = styled.div`
  margin-top: 30px;
  max-width: 45%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  line-height: 28px;
  font-size: 18px;
`;

const StyledActionBtn = styled.button`
  padding: 15px 25px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  font-size: 20px;
  position: relative;
  border: 1px solid #000000;
  border-radius: 7px;
  overflow: hidden;
  background-color: transparent;
`;

const Gradient = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: ${(props) =>
    props.hover
      ? "linear-gradient(180deg, #0696ff 0%, #4ef9fe 100%)"
      : "linear-gradient(180deg, #4ef9fe 0%, #0696ff 100%)"};
  transition: opacity 0.8s;
  opacity: ${(props) => (props.hover ? 1 : 0)};
`;

const StyledContent = styled.div`
  margin: 40px auto;
  max-width: 1200px;
`;

const StyledForm = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
`;

const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const StyledInput = styled.input`
  padding: 12px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const StyledFileInput = styled.input`
  font-size: 16px;
  cursor: pointer;
`;

const StyledTextarea = styled.textarea`
  padding: 12px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: vertical;
  min-height: 120px;
`;

const OrderForm = () => {
  const [hover, setHover] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledContent>
      <StyledHeader>
        <StyledTitle>Place Your Order</StyledTitle>
        <StyledDescription>
          Please fill out the form below and attach any relevant files to place
          your order. We will get back to you as soon as possible.
        </StyledDescription>
      </StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <StyledInput type="text" id="name" name="name" required />

        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput type="email" id="email" name="email" required />

        <StyledLabel htmlFor="message">Order Details</StyledLabel>
        <StyledTextarea id="message" name="message" required></StyledTextarea>

        <StyledLabel htmlFor="file">Upload File</StyledLabel>
        <StyledFileInput
          type="file"
          id="file"
          name="file"
          accept=".stl,.obj,.fbx"
        />

        <StyledActionBtn
          type="submit"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Place Order
          <Gradient hover={hover} />
          <Gradient hover={!hover} />
        </StyledActionBtn>
      </StyledForm>
    </StyledContent>
  );
};

export default OrderForm;
