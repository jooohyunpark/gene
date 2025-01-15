import { ReactNode } from 'react';

export interface TableProps {
  children?: ReactNode;
}

export interface TableHeadProps {
  color?: 'primary' | 'neutral';
  children?: ReactNode;
}

export interface TableRowProps {
  borderBottom?: boolean;
  hover?: boolean;
  children?: ReactNode;
}

export interface TableBodyProps {
  children?: ReactNode;
}

export interface TableCellProps {
  component?: 'th' | 'td';
  scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
  children?: ReactNode;
}

export interface GeneTableHeadProps {
  $color?: 'primary' | 'neutral';
}
export interface GeneTableRowProps {
  $borderBottom?: boolean;
  $hover?: boolean;
}
