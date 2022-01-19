import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Roboto", sans-serif;
    color: #cccccc;
    background-color: #00142d;
  }
  .btn-link {
    display: block;
    margin: 20px auto;
 }

 .content-upper-main {
    max-width: 700px;
 }
`;

export default GlobalStyle;
