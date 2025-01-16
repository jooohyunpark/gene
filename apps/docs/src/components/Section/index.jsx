import { StyledSection } from './styles';

const Section = ({ children, ...props }) => {
  return <StyledSection {...props}>{children}</StyledSection>;
};

export default Section;
