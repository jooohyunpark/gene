import styled from 'styled-components';
import { TableCell } from '@gene/ui';
import { color, space } from '@gene/token';
import { MediaAbove } from '@/styles/js';

export const Box = styled.div`
  width: ${({ $size }) => $size}px;
  aspect-ratio: 1 / 1;
  background: ${color.blue20};
`;

export const StyledTableCell = styled(TableCell)`
  ${MediaAbove('md')} {
    min-width: ${space(20)}px;
  }
`;
