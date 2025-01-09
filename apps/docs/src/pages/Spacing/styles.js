import styled from 'styled-components';

import { color, space } from '@gene/token';
import { MediaAbove } from '@/styles/js';
import { Table } from '@/components/Table';

export const Box = styled.div`
  width: ${({ $size }) => $size}px;
  aspect-ratio: 1 / 1;
  background: ${color.blue20};
`;

export const CustomTable = styled(Table)``;

export const StyledTd = styled.td`
  ${MediaAbove('md')} {
    min-width: ${space(20)}px;
  }
`;
