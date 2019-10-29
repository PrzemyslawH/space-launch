import { createGlobalStyle } from 'styled-components';
import { colors } from '../utils/colors';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after,
  :root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  @import url('https://fonts.googleapis.com/css?family=Barlow:400,500,600&display=swap');

  html, body {
    height: 100%;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Barlow', sans-serif;
    font-size: 1.6rem;
    line-height: 2.4rem;
    background: ${colors.dark};
    color: ${colors.light};
  }
  
  a {
    color: ${colors.light};
    text-decoration: none;
  }
  
  p {
    opacity: .7;
  }
  
  ul {
    list-style-type: none;
  }
`;

export default GlobalStyle;
