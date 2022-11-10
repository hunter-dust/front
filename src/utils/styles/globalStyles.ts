import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }

  *,
  body {
    font-size: 1.6rem;
    box-sizing: border-box;
  }
  #root{
    background-color: #97c3fe;
  }
  a {
    text-decoration: none;
  }
`;
