import { StyledTable, TableLayout, StyledTh, StyledTd } from './styles';

export const Th = ({ scope = 'col', align = 'center', children, ...props }) => (
  <StyledTh scope={scope} $align={align} {...props}>
    {children}
  </StyledTh>
);

export const Td = ({ align = 'left', children, ...props }) => (
  <StyledTd $align={align} {...props}>
    {children}
  </StyledTd>
);

export const Table = ({ children, ...props }) => {
  return (
    <TableLayout>
      <StyledTable {...props}>{children}</StyledTable>
    </TableLayout>
  );
};

export default Table;
