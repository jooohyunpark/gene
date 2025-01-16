import { HTMLAttributes } from 'react';

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
  align?: 'left' | 'center' | 'right';
}

export interface GeneTableHeadProps {
  $color?: 'primary' | 'neutral';
}
export interface GeneTableRowProps {
  $borderBottom?: boolean;
  $hover?: boolean;
}

export interface GeneTableCellProps {
  $align?: 'left' | 'center' | 'right';
}
