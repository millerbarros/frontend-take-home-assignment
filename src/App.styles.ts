import { createGlobalStyle } from 'styled-components';

// STYLES
import { COLOR, GENERAL } from '~/styles/variables';

export const GlobalStyledApp = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${GENERAL.fontSize};
    line-height: 1.2;
  }

  body {
    position: relative;
    min-width: ${GENERAL.minWidth};
    font-family: Work Sans, sans-serif;
    font-weight: normal;
    font-style: normal;
    background-color: ${COLOR.blueGray10};
    color: ${COLOR.blueGray900};
  }
`;
