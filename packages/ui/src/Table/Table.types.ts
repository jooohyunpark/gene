import { HTMLAttributes } from 'react';

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  color?: 'primary' | 'neutral';
  expressive?: boolean;
  borderBottom?: boolean;
  zebra?: boolean;
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
  $expressive?: boolean;
  $zebra?: boolean;
}

export interface GeneTableCellProps {
  $align?: 'left' | 'center' | 'right';
}
