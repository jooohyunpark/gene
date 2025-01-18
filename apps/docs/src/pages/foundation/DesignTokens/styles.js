import styled from 'styled-components';
import { Table } from '@gene/ui';
import { space } from '@gene/token';
import { MediaAbove } from '@/styles/js';

export const StyledTableCell = styled(Table.Cell)`
  ${MediaAbove('md')} {
    min-width: ${space(30)}px;
  }
`;
