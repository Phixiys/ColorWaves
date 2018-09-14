import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }
`;

export default GlobalStyle;
