import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  *,html {
    font-size: 62.5%;
    font-size: 1.6rem;
    box-sizing: border-box;
  }

  body {
    background-color: #97c3fe;
  }
  #root{
    width: 375px;
    height: 667px;
    background-color: #fdfdfd;
    margin: 2rem auto;
    overflow: scroll;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
`;
