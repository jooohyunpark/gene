import styled from 'styled-components';
import { color } from '@gene/tokens';
import { headerHeight } from '@/styles/js';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${headerHeight}px;

  display: flex;
  align-items: center;

  background-color: ${color.blue30};
  color: ${color.white};
`;
