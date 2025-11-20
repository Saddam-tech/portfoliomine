import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 
  html {
    background-color: #0F1624;
    font-family: Space Grotesk, sans-serif;
    background: "#0F1624",
  }

  /* Hide the native vertical scrollbar but keep scrolling functional */
  html, body {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  html::-webkit-scrollbar,
  body::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
    width: 0;
    height: 0;
  }
`;
