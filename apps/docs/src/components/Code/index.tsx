import { FC, PropsWithChildren } from 'react';
import { StyledCode } from './styles';

const Code: FC<PropsWithChildren> = ({ children, ...props }) => {
  return <StyledCode {...props}>{children}</StyledCode>;
};

export default Code;
