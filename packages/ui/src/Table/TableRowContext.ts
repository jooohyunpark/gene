import { createContext, useContext } from 'react';

interface TableRowContextValue {
  isBody: boolean;
}

export const TableRowContext = createContext<TableRowContextValue>({
  isBody: false,
});

export const useTableRowContext = () => useContext(TableRowContext);
