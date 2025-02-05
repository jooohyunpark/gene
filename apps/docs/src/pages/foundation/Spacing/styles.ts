import styled from 'styled-components';
import { TableCell } from '@jooohyunpark/gene-ui';
import { color, space } from '@jooohyunpark/gene-token';
import { MediaAbove } from '@/styles/helper';

interface BoxProps {
  $size: number;
}

export const Box = styled.div<BoxProps>`
  display: inline-block;
  width: ${({ $size }) => $size}px;
  aspect-ratio: 1 / 1;
  background: ${color.blue20};
`;

export const StyledTableCell = styled(TableCell)`
  ${MediaAbove('md')} {
    min-width: ${space(20)}px;
  }
`;
