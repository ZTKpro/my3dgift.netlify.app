import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Buble from "./component/buble";

const StyledHeader = styled.section`
  margin: 40px auto;
  margin-top: 200px;
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

function App() {
  const [hover, setHover] = React.useState(false);

  return (
    <StyledContent>
      <StyledHeader>
        <StyledTitle>Wyjątkowy prezent</StyledTitle>
        <StyledDescription>
          <p>
            Wyobraź sobie, że możesz mieć swoją własną, unikalną figurkę 3D
            stworzoną na podstawie Twojego zdjęcia.
          </p>
          <p>
            To możliwe dzięki naszej usłudze personalizowanych figur 3D! Idealne
            jako prezent dla bliskiej osoby lub jako pamiątka z ważnego
            wydarzenia.
          </p>

          <p>Nie czekaj dłużej i zamów już dziś!</p>
        </StyledDescription>
      </StyledHeader>
      <Link to="/order">
        <StyledActionBtn
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Zamawiam
          <Gradient hover={hover} />
          <Gradient hover={!hover} />
        </StyledActionBtn>
      </Link>
      <Buble size="320px" position={[43, 70]} inside />
      <Buble size="50px" position={[23, 80]} />
    </StyledContent>
  );
}

export default App;
