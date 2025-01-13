import { Card } from '@gene/ui';
import { space, color } from '@gene/token';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${space(2)}px;
  width: 100%;
`;

const StyledCodeCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${space(2)}px;
  width: 100%;
`;

const PreviewBlock = ({ children }) => {
  return (
    <>
      <StyledCard color="primary" padding="lg">
        {children}
      </StyledCard>
      <StyledCodeCard padding="lg">
        <pre>
          <code>{children}</code>
        </pre>
      </StyledCodeCard>
    </>
  );
};

export default PreviewBlock;
