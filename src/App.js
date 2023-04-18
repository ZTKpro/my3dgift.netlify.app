import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const StyledTitle = styled.h1`
font-size: 26px;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyledTitle>
          Edit <code>src/App.js</code> and save to reload.
        </StyledTitle>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
