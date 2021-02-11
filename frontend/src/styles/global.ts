import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    height: 100vh;
    width: 100vw;
  }

  #root {
    height: 100vh;

    display: flex;
    flex-direction: column;
  }

  button {
    cursor: pointer;
    border: none;
  }

  body, button, input {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
`;

export default GlobalStyles;
