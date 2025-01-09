import { color, space, typography } from '@gene/token';
import styled from 'styled-components';
import { borderColor } from '@/styles/js';

export const TableLayout = styled.div`
  overflow-x: auto;
  max-width: 100%;
  margin-top: ${space(3)}px;
`;

export const StyledTable = styled.table`
  width: 100%;
  table-layout: auto;
  white-space: nowrap;
  border-collapse: collapse;

  ${typography.body03};

  thead {
    background-color: ${color.blue30};
    color: ${color.white};
  }

  th {
    font-weight: 700;
  }

  tbody tr {
    border-bottom: 1px solid ${borderColor};
  }

  th,
  td {
    padding: ${space(1.5)}px ${space(3)}px;
  }
`;

export const StyledThead = styled.thead``;

export const StyledTh = styled.th`
  text-align: ${({ $align }) => $align};
`;

export const StyledTd = styled.td`
  text-align: ${({ $align }) => $align};
`;
