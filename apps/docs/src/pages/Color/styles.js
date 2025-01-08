import { space, typography } from '@gene/token';
import styled from 'styled-components';

export const Box = styled.div`
  width: 20%;
  max-width: ${space(15)}px;
  aspect-ratio: 1 / 1;
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
  flex-wrap: wrap;
  width: 100%;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
  margin: 0;
`;
