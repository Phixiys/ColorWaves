import { createGlobalStyle } from "styled-components";

const fonts = () => {
  const list = ['Montserrat', 'Roboto'];
  return list.join('');
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=${fonts}');

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }
`;

export default GlobalStyle;