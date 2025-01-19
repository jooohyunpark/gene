import styled from 'styled-components';
import { Table } from '@jooohyunpark/gene-ui';
import { space } from '@jooohyunpark/gene-token';
import { MediaAbove } from '@/styles/js';

export const StyledTableCell = styled(Table.Cell)`
  ${MediaAbove('md')} {
    min-width: ${space(30)}px;
  }
`;
