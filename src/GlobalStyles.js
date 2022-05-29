import { createGlobalStyle } from "styled-components";
import { ww } from "./styles/responsive";

const GlobalStyles = createGlobalStyle`
    *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;

      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
      &:: -webkit-scrollbar {
        display: none;
      }
    }
    body {
      font-family: 'Inter', sans-serif;
      font-size: ${ww(9)}px;
      font-weight: 400;
      font-size: ${ww(4)}px;
      overflow: hidden;
      
      p, h1 {
        text-shadow: 0px 1px 3px rgba(94.1, 95.3, 98, 0.17);
        color: #4c4c4c;
      }
    }

    button {
      all: unset;
      cursor: pointer;
      height: ${ww(23)}px;
      border-radius: ${ww(3)}px;
    }
    
    input, textarea {
      all: unset;
      border-radius: ${ww(3)}px;
    }
    a {
      all: unset;
    }
`;

export default GlobalStyles;
