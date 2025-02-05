import { FC, PropsWithChildren } from 'react';
import { StyledSection } from './styles';

interface SectionProps extends PropsWithChildren {
  id?: string;
}

const Section: FC<SectionProps> = ({ children, id, ...props }) => {
  return (
    <StyledSection id={id} {...props}>
      {children}
    </StyledSection>
  );
};

export default Section;
