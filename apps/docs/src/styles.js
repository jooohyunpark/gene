import styled, { createGlobalStyle, css } from 'styled-components';
import { typography, color, space } from '@gene/token';
import {
  navWidth,
  MediaAbove,
  SetPadding,
  textColor,
  headerHeight,
  contentMaxWidth,
} from '@/styles/js';

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

export const StyledApp = styled.div``;

export const StyledLayout = styled.div`
  ${MediaAbove('md')} {
    padding-left: ${navWidth}px;
  }
`;

export const StyledContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: calc(100vh - ${headerHeight}px);
  min-height: calc(100vh - ${headerHeight}px);

  ${MediaAbove('md')} {
    min-height: 100vh;
    min-height: 100dvh;
  }

  max-width: ${contentMaxWidth}px;
  margin: 0 auto;
`;

export const StyledMain = styled.main``;

export const StyledArticle = styled.article`
  ${SetPadding()};
`;
