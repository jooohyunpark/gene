import { forwardRef, ForwardedRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { color, space, typography } from '@gene/token';
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
  ${({ $borderBottom = true }) =>
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

export const TableContainer = forwardRef(
  (
    { children, ...props }: HTMLAttributes<HTMLDivElement>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <GeneTableContainer ref={ref as ForwardedRef<HTMLDivElement>} {...props}>
        {children}
      </GeneTableContainer>
    );
  },
);

const TableBase = forwardRef(
  (
    {
      color = 'primary',
      expressive = true,
      borderBottom = true,
      zebra = false,
      children,
      ...props
    }: TableProps,
    ref: ForwardedRef<HTMLTableElement>,
  ) => {
    return (
      <TableContext.Provider value={{ color, expressive, borderBottom, zebra }}>
        <GeneTable ref={ref as ForwardedRef<HTMLTableElement>} {...props}>
          {children}
        </GeneTable>
      </TableContext.Provider>
    );
  },
);

export const TableHead = forwardRef(
  (
    { children, ...props }: HTMLAttributes<HTMLTableSectionElement>,
    ref: ForwardedRef<HTMLTableSectionElement>,
  ) => {
    const { color } = useTableContext();

    return (
      <TableSectionContext.Provider value={{ section: 'head' }}>
        <GeneTableHead
          ref={ref as ForwardedRef<HTMLTableSectionElement>}
          $color={color}
          {...props}
        >
          {children}
        </GeneTableHead>
      </TableSectionContext.Provider>
    );
  },
);

export const TableBody = forwardRef(
  (
    { children, ...props }: HTMLAttributes<HTMLTableSectionElement>,
    ref: ForwardedRef<HTMLTableSectionElement>,
  ) => {
    return (
      <TableSectionContext.Provider value={{ section: 'body' }}>
        <GeneTableBody
          ref={ref as ForwardedRef<HTMLTableSectionElement>}
          {...props}
        >
          {children}
        </GeneTableBody>
      </TableSectionContext.Provider>
    );
  },
);

export const TableRow = forwardRef(
  (
    { children, ...props }: HTMLAttributes<HTMLTableRowElement>,
    ref: ForwardedRef<HTMLTableRowElement>,
  ) => {
    const { borderBottom, expressive, zebra } = useTableContext();
    const { section } = useTableSectionContext();

    return (
      <GeneTableRow
        ref={ref as ForwardedRef<HTMLTableRowElement>}
        $borderBottom={section === 'body' ? borderBottom : false}
        $expressive={section === 'body' ? expressive : false}
        $zebra={section === 'body' ? zebra : false}
        {...props}
      >
        {children}
      </GeneTableRow>
    );
  },
);

export const TableCell = forwardRef(
  (
    {
      component = 'td',
      scope = 'col',
      align = 'left',
      children,
      ...props
    }: TableCellProps,
    ref: ForwardedRef<HTMLTableCellElement>,
  ) => {
    const { section } = useTableSectionContext();

    const componentProp = section === 'head' ? 'th' : component;
    const scopeProp = componentProp === 'th' ? { scope } : {};

    return (
      <GeneTableCell
        ref={ref as ForwardedRef<HTMLTableCellElement>}
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
