import { createGlobalStyle, css } from 'styled-components';
import { typography } from '@gene/tokens';

export const GlolbalStyle = createGlobalStyle`${css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

  body {
    font-family: ${typography.fontFamily};
  }

  h1 {
    ${typography.h1};
  }

  h2 {
    ${typography.h2};
  }

  h3 {
    ${typography.h3};
  }

  h4 {
    ${typography.h4};
  }

  h5 {
    ${typography.h5};
  }

  h6 {
    ${typography.h6};
  }
`}`;
