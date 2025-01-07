import styled, { createGlobalStyle, css } from 'styled-components';
import { typography, color, space } from '@gene/tokens';
import {
  headerHeight,
  navWidth,
  MediaAbove,
  ContentPadding,
} from '@/styles/js';

export const GlolbalStyle = createGlobalStyle`
${css`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${typography.fontFamily};
    ${typography.body01};
    color: ${color.gray100};
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

export const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
`;

export const MainLayout = styled.main`
  margin-top: ${headerHeight}px;

  ${MediaAbove('md')} {
    margin-left: ${navWidth}px;
  }
`;

export const PageLayout = styled.div`
  max-width: ${space(120)}px;
  margin: 0 auto;

  ${ContentPadding()};
`;
