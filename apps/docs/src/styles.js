import styled, { createGlobalStyle, css } from 'styled-components';
import { typography, color, space } from '@gene/token';
import { navWidth, MediaAbove, SetPadding, textColor } from '@/styles/js';

export const GlolbalStyle = createGlobalStyle`
${css`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${typography.fontFamily};
    ${typography.body01};
    color: ${textColor};
  }

  ::selection {
    background-color: ${color.blue20};
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

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const StyledMain = styled.main`
  ${MediaAbove('md')} {
    margin-left: ${navWidth}px;
  }
`;

export const StyledArticle = styled.article`
  max-width: ${space(120)}px;
  margin: 0 auto;

  ${SetPadding()};
`;
