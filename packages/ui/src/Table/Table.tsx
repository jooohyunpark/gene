import { forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { color, space, typography } from '@jooohyunpark/gene-token';
import {
  TableContext,
  TableSectionContext,
  useTableContext,
  useTableSectionContext,
} from './TableContext';

import type {
  TableProps,
  TableCellProps,
  GeneTableHeadProps,
  GeneTableRowProps,
  GeneTableCellProps,
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

const GeneTableRow = styled.tr<GeneTableRowProps>`
  ${({ $borderBottom = false }) =>
    $borderBottom &&
    css`
      border-bottom: 1px solid ${color.gray30};
    `}

  ${({ $zebra = true }) =>
    $zebra &&
    css`
      &:nth-child(even) {
        background: ${color.gray20};
      }
    `}

  ${({ $expressive = true }) =>
    $expressive &&
    css`
      @media (hover: hover) {
        &:hover {
          background: ${color.gray10};
        }
      }
    `}
`;

const GeneTableCell = styled.td<GeneTableCellProps>`
  padding: ${space(1.5)}px ${space(3)}px;
  text-align: ${({ $align }) => $align};
`;

export const TableContainer = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  return (
    <GeneTableContainer ref={ref} {...props}>
      {children}
    </GeneTableContainer>
  );
});

const TableBase = forwardRef<HTMLTableElement, TableProps>(
  (
    { color = 'primary', expressive = true, zebra = false, children, ...props },
    ref,
  ) => {
    return (
      <TableContext.Provider value={{ color, expressive, zebra }}>
        <GeneTable ref={ref} {...props}>
          {children}
        </GeneTable>
      </TableContext.Provider>
    );
  },
);

export const TableHead = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ children, ...props }, ref) => {
  const { color } = useTableContext();

  return (
    <TableSectionContext.Provider value={{ section: 'head' }}>
      <GeneTableHead ref={ref} $color={color} {...props}>
        {children}
      </GeneTableHead>
    </TableSectionContext.Provider>
  );
});

export const TableBody = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ children, ...props }, ref) => (
  <TableSectionContext.Provider value={{ section: 'body' }}>
    <GeneTableBody ref={ref} {...props}>
      {children}
    </GeneTableBody>
  </TableSectionContext.Provider>
));

export const TableRow = forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement>
>(({ children, ...props }, ref) => {
  const { expressive, zebra } = useTableContext();
  const { section } = useTableSectionContext();

  return (
    <GeneTableRow
      ref={ref}
      $section={section}
      $borderBottom={section === 'body' ? !zebra : false}
      $expressive={section === 'body' ? expressive : false}
      $zebra={section === 'body' ? zebra : false}
      {...props}
    >
      {children}
    </GeneTableRow>
  );
});

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  (
    { component = 'td', scope = 'col', align = 'left', children, ...props },
    ref,
  ) => {
    const { section } = useTableSectionContext();

    const componentProp = section === 'head' ? 'th' : component;
    const scopeProp = componentProp === 'th' ? { scope } : {};

    return (
      <GeneTableCell
        ref={ref}
        as={componentProp}
        $align={align}
        {...scopeProp}
        {...props}
      >
        {children}
      </GeneTableCell>
    );
  },
);

type TableComponent = typeof TableBase & {
  Container: typeof TableContainer;
  Head: typeof TableHead;
  Body: typeof TableBody;
  Row: typeof TableRow;
  Cell: typeof TableCell;
};

export const Table: TableComponent = TableBase as TableComponent;

Table.Container = TableContainer;
Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
