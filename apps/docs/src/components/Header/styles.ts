import styled from 'styled-components';
import { headerHeight, SetPadding, borderColor } from '@/styles/helper';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;

  height: ${headerHeight}px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-bottom: 1px solid ${borderColor};
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1;

  ${SetPadding({ x: true, y: false })};
`;
