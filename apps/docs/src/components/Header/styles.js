import styled from 'styled-components';
import { headerHeight, ContentPadding } from '@/styles/js';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${headerHeight}px;

  display: flex;
  align-items: center;

  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1;

  ${ContentPadding({ x: true, y: false })};
`;
