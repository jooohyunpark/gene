import styled from 'styled-components';
import { headerHeight, ContentPadding } from '@/styles/js';
import { color } from '@gene/token';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;

  height: ${headerHeight}px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-bottom: 1px solid ${color.gray60};
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1;

  ${ContentPadding({ x: true, y: false })};
`;
