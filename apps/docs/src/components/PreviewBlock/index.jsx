import { useEffect } from 'react';
import Prism from 'prismjs';

import { Card } from '@gene/ui';
import { space, color, typography } from '@gene/token';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${space(2)}px;
  width: 100%;
`;

const StyledCodeCard = styled(Card)`
  width: 100%;
  ${typography.body03};

  pre {
    padding: 0;
    background: transparent;
  }
`;

const PreviewBlock = ({ code = '', children }) => {
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  }, []);

  return (
    <>
      <StyledCard color="primary" padding="lg">
        {children}
      </StyledCard>

      <StyledCodeCard padding="lg">
        <pre>
          <code className="language-jsx">{code}</code>
        </pre>
      </StyledCodeCard>
    </>
  );
};

export default PreviewBlock;
