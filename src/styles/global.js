import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

const globalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

button {
  cursor: pointer;
  font-family: 'Roboto', Helvetica, sans-serif !important;
}

html, body, #root {
  height: 100%;
}

body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  background: #fff;
  font-family: 'Roboto', Helvetica, sans-serif !important;
  color: #000;
}
`;

export default globalStyle;
