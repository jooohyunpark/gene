import { color, space, typography } from '@gene/token';
import styled from 'styled-components';

export const TableLayout = styled.div`
  overflow-x: auto;
  max-width: 100%;
  margin-top: ${space(2)}px;
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
    border-bottom: 1px solid ${color.gray60};
  }

  th,
  td {
    padding: ${space(1.5)}px ${space(3)}px;
  }
`;

export const StyledThead = styled.thead``;

export const ExampleText = styled.div`
  ${({ $type }) => typography[`${$type}`]};
  white-space: nowrap;
`;
