import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Work Sans', sans-serif;
    background-color: #2d6187;
  }
`;

export default GlobalStyle;