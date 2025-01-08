import { color, space, typography } from '@gene/token';
import styled from 'styled-components';

export const StyledTable = styled.table`
  max-width: 100%;
  overflow-x: auto;

  ${typography.body02};

  th {
    ${typography.body03};
    font-weight: 700;
  }

  th,
  td {
    padding: ${space(1)}px ${space(2)}px;
  }

  thead {
    background-color: ${color.blue30};
    color: ${color.white};
  }
`;

export const StyledThead = styled.thead``;

export const ExampleText = styled.div`
  ${({ $type }) => typography[`${$type}`]};
`;
