import { TableHTMLAttributes } from 'react';

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  color?: 'primary' | 'neutral';
  expressive?: boolean;
  zebra?: boolean;
}

export interface TableCellProps
  extends TableHTMLAttributes<HTMLTableCellElement> {
  component?: 'th' | 'td';
  scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
  align?: 'left' | 'center' | 'right';
}

export interface GeneTableHeadProps {
  $color?: 'primary' | 'neutral';
}
export interface GeneTableRowProps {
  $expressive?: boolean;
  $zebra?: boolean;
  $section?: 'head' | 'body';
  $borderBottom?: boolean;
}

export interface GeneTableCellProps {
  $align?: 'left' | 'center' | 'right';
}
