import { forwardRef, ForwardedRef } from 'react';
import styled, { css } from 'styled-components';
import { color, space, typography } from '@gene/token';
import {
  TableProps,
  TableHeadProps,
  TableRowProps,
  TableCellProps,
  GeneTableHeadProps,
} from './Table.types';

const colors = {
  primary: color.blue30,
  neutral: color.gray60,
};

const GeneTableContainer = styled.div`
  overflow-x: auto;
  max-width: 100%;
`;

const GeneTable = styled.table`
  width: 100%;
  table-layout: auto;
  white-space: nowrap;
  border-collapse: collapse;
  ${typography.body03};
`;

const GeneTableHead = styled.thead<GeneTableHeadProps>`
  background: ${({ $color = 'primary' }) => colors[$color]};
  color: ${color.white};
`;

const GeneTableBody = styled.tbody``;

const GeneTableRow = styled.tr``;

const GeneTableCell = styled.td`
  padding: ${space(1.5)}px ${space(3)}px;
`;

export const TableContainer = forwardRef(
  ({ children, ...props }: TableProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <GeneTableContainer ref={ref as ForwardedRef<HTMLDivElement>} {...props}>
        {children}
      </GeneTableContainer>
    );
  },
);

export const Table = forwardRef(
  ({ children, ...props }: TableProps, ref: ForwardedRef<HTMLTableElement>) => {
    return (
      <GeneTable ref={ref as ForwardedRef<HTMLTableElement>} {...props}>
        {children}
      </GeneTable>
    );
  },
);

export const TableHead = forwardRef(
  (
    { color = 'primary', children, ...props }: TableHeadProps,
    ref: ForwardedRef<HTMLTableSectionElement>,
  ) => {
    return (
      <GeneTableHead
        ref={ref as ForwardedRef<HTMLTableSectionElement>}
        $color={color}
        {...props}
      >
        {children}
      </GeneTableHead>
    );
  },
);

export const TableBody = forwardRef(
  (
    { children, ...props }: TableRowProps,
    ref: ForwardedRef<HTMLTableSectionElement>,
  ) => {
    return (
      <GeneTableBody
        ref={ref as ForwardedRef<HTMLTableSectionElement>}
        {...props}
      >
        {children}
      </GeneTableBody>
    );
  },
);

export const TableRow = forwardRef(
  (
    { children, ...props }: TableRowProps,
    ref: ForwardedRef<HTMLTableRowElement>,
  ) => {
    return (
      <GeneTableRow ref={ref as ForwardedRef<HTMLTableRowElement>} {...props}>
        {children}
      </GeneTableRow>
    );
  },
);

export const TableCell = forwardRef(
  (
    { component = 'td', scope = 'col', children, ...props }: TableCellProps,
    ref: ForwardedRef<HTMLTableCellElement>,
  ) => {
    return (
      <GeneTableCell
        ref={ref as ForwardedRef<HTMLTableCellElement>}
        as={component}
        scope={scope}
        {...props}
      >
        {children}
      </GeneTableCell>
    );
  },
);
