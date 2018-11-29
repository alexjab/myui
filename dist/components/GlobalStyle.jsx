import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fontSize};
  }

  button {
    font-size: ${props => props.theme.fontSize};
  }
`;

export default GlobalStyle;
