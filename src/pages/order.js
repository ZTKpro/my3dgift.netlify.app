import styled from 'styled-components';

const StyledTitle = styled.h1`
font-size: 26px;
`

function Order() {
  return (
    <div >
      <StyledTitle>
        Jak to działa?
      </StyledTitle>
      <p>
        Wyslij nam zdjecie osoby którą chcesz pokażać
        Poczekaj na scan
        Zatwierdz scan
        Ciesz się wyjątkowym prezentem!
      </p>

    </div>
  );
}

export default Order;
