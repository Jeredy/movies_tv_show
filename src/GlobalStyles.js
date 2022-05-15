import { createGlobalStyle } from "styled-components";
// #1A6DFF
// #C822FF
const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    font-weight: 200;
    font-size: .9rem;
    overflow-x: hidden;
            
    p, h1 {
        text-shadow: 0px 1px 3px rgba(94.1, 95.3, 98, 0.17);
    }
  }

  button {
    all: unset;
    cursor: pointer;
    height: 40px;
    border-radius: 6px;
  }

  input {
    all: unset;
    border-radius: 6px;
  }

  a {
    all: unset;
  }
`;

export default GlobalStyles;
