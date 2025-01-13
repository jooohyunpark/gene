import { StyledCode } from './styles';

const Code = ({ children, ...props }) => {
  return <StyledCode {...props}>{children}</StyledCode>;
};

export default Code;
