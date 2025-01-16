import { ReactNode, HTMLAttributes } from 'react';

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children?: ReactNode;
}

export interface TableHeadProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  color?: 'primary' | 'neutral';
}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  borderBottom?: boolean;
  hover?: boolean;
}

export interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
  component?: 'th' | 'td';
  scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
}

export interface GeneTableHeadProps {
  $color?: 'primary' | 'neutral';
}
export interface GeneTableRowProps {
  $borderBottom?: boolean;
  $hover?: boolean;
}
