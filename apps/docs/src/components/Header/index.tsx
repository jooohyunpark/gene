import { FC, PropsWithChildren } from 'react';
import { StyledHeader } from './styles';

const Header: FC<PropsWithChildren> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
