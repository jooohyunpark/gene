import styled from 'styled-components';
import { TableCell } from '@gene/ui';
import { space } from '@gene/token';
import { MediaAbove } from '@/styles/js';

export const StyledTableCell = styled(TableCell)`
  ${MediaAbove('md')} {
    min-width: ${space(30)}px;
  }
`;
