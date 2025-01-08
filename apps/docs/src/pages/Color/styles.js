import { space, typography } from '@gene/token';
import styled from 'styled-components';

export const Box = styled.div`
  width: ${space(15)}px;
  height: ${space(15)}px;
  background-color: ${({ $background }) => $background};
  color: ${({ $color }) => $color};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${space(1)}px;
  font-weight: ${typography.fontWeight700};
  font-size: ${typography.fontSize20};
`;

export const BoxRow = styled.div`
  display: flex;
`;
