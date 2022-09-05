import fonts from "res/fonts";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/***** Css reset *****/
html {
  box-sizing: border-box;
  font-size: 16px;
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-family: ${fonts.text};
  font-weight: 400;
}

ol,
ul {
  list-style: none;
}

img {
  border-style: none;
  max-width: 100%;
  height: auto;
}
/*******************/   
`;

export default GlobalStyle;
