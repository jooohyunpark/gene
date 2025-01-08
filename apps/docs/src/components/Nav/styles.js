import styled from 'styled-components';
import { headerHeight, navWidth, ContentPadding } from '@/styles/js';
import { space } from '@gene/token';

export const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: ${headerHeight}px;
  width: ${navWidth}px;
  height: calc(100vh - ${headerHeight}px);
  overflow-y: hidden;
  background: gray;

  ${ContentPadding()};
`;
