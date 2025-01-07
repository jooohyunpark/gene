import styled from 'styled-components';
import { headerHeight, navWidth } from '@/styles/js';
import { space } from '@gene/tokens';

export const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: ${headerHeight}px;
  width: ${navWidth}px;
  height: calc(100vh - ${headerHeight}px);
  overflow-y: hidden;
  padding: ${space(5)}px ${space(2)}px;
  background: gray;
`;
