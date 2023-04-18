import styled from "styled-components";

const StyledWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => `${top}%`};
  left: ${({ left }) => `${left}%`};
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #4ef9fe 0%, #0696ff 100%);
  transform: translate(-50%, -50%);
  z-index: 5;
`;

const StyledInside = styled.div`
  height: 85%;
  width: 85%;
  background-color: black;
  border-radius: 100%;
`;

function Buble({ size, position, inside }) {
  return (
    <StyledWrapper top={position[0]} left={position[1]} size={size}>
      {inside && <StyledInside />}
    </StyledWrapper>
  );
}

export default Buble;
