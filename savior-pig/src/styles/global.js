import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }

  body, html {
    background: linear-gradient(to bottom, #33ccff 0%, #ccccff 100%);
    background-repeat: no-repeat;
    font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
`;

export default GlobalStyle;