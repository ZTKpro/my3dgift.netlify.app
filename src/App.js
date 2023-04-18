import styled from 'styled-components';
import GlobalStyle from './styles/globalStyles';


const StyledTitle = styled.h1`
font-size: 26px;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledTitle>
        Wyjątkowy prezent
      </StyledTitle>
      <p>Wyobraź sobie, że możesz mieć swoją własną, unikalną figurkę 3D stworzoną na podstawie Twojego zdjęcia.

        To możliwe dzięki naszej usłudze personalizowanych figur 3D! Idealne jako prezent dla bliskiej osoby lub jako pamiątka z ważnego wydarzenia.

        Nie czekaj dłużej i zamów już dziś!</p>
      <p>Zamawiam</p>


      <div>
        <h2>
          Unikalność
        </h2>
        <p>
          Każda figurka jest tworzona na podstawie zdjęcia klienta, co oznacza, że każda z nich jest całkowicie unikalna i osobista.
        </p>
      </div>
      <div>
        <h2>
          Wysoka jakość
        </h2>
        <p>
          Nasze figurki 3D są drukowane z najwyższej jakości materiałów, co gwarantuje trwałość i długotrwałe użytkowanie.
        </p>
      </div>
      <div>
        <h2>
          Doskonały prezent
        </h2>
        <p>
          Personalizowane figurki 3D to idealny prezent dla każdego. Możesz zamówić figurkę na podstawie zdjęcia bliskiej osoby i sprawić jej niezapomnianą niespodziankę.
        </p>
      </div>
      <div> Zamów już dziś unikalną figurkę</div>
    </>
  );
}

export default App;
