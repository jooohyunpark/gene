import { createGlobalStyle, css } from 'styled-components';
import { typography, color } from '@gene/tokens';

export const GlolbalStyle = createGlobalStyle`
${css`
  body {
    font-family: ${typography.fontFamily};
    ${typography.body01};
    color: ${color.gray[100]};
  }

  h1 {
    ${typography.heading01};
  }

  h2 {
    ${typography.heading02};
  }

  h3 {
    ${typography.heading03};
  }

  h4 {
    ${typography.heading04};
  }

  h5 {
    ${typography.heading05};
  }

  h6 {
    ${typography.heading06};
  }
`}
`;
