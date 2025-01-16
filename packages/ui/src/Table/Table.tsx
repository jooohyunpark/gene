import { forwardRef, ForwardedRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { color, space, typography } from '@gene/token';
import { TableRowContext, useTableRowContext } from './TableRowContext';
import type {
  TableHeadProps,
  TableRowProps,
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

  ${({ $hover = true }) =>
    $hover &&
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

export const Table = forwardRef(
  (
    { children, ...props }: HTMLAttributes<HTMLTableElement>,
    ref: ForwardedRef<HTMLTableElement>,
  ) => {
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
    { children, ...props }: HTMLAttributes<HTMLTableSectionElement>,
    ref: ForwardedRef<HTMLTableSectionElement>,
  ) => {
    return (
      <TableRowContext.Provider value={{ isBody: true }}>
        <GeneTableBody
          ref={ref as ForwardedRef<HTMLTableSectionElement>}
          {...props}
        >
          {children}
        </GeneTableBody>
      </TableRowContext.Provider>
    );
  },
);

export const TableRow = forwardRef(
  (
    { children, borderBottom = true, hover = true, ...props }: TableRowProps,
    ref: ForwardedRef<HTMLTableRowElement>,
  ) => {
    const { isBody } = useTableRowContext(); // Consume the context

    return (
      <GeneTableRow
        ref={ref as ForwardedRef<HTMLTableRowElement>}
        $borderBottom={isBody ? borderBottom : false}
        $hover={isBody ? hover : false}
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
    const defaultAlign = component === 'th' ? 'center' : 'left';
    const finalAlign = align || defaultAlign;

    const scopeProp = component === 'th' ? { scope } : {};

    return (
      <GeneTableCell
        ref={ref as ForwardedRef<HTMLTableCellElement>}
        as={component}
        $align={finalAlign}
        {...scopeProp}
        {...props}
      >
        {children}
      </GeneTableCell>
    );
  },
);
