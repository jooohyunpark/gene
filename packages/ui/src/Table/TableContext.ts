import { createContext, useContext } from 'react';

interface TableContextValue {
  color?: 'primary' | 'neutral';
  expressive?: boolean;
  borderBottom?: boolean;
}

export const TableContext = createContext<TableContextValue>({
  color: 'primary',
  expressive: true,
  borderBottom: true,
});

export const useTableContext = () => useContext(TableContext);

interface TableSectionContextValue {
  section: 'head' | 'body';
}

export const TableSectionContext = createContext<TableSectionContextValue>({
  section: 'body',
});

export const useTableSectionContext = () => useContext(TableSectionContext);
