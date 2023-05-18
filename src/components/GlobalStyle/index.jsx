import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
  }
  ul {
    list-style: none;
  }
  a {
    color: #434343;
  }
`;
export default GlobalStyle;
