import { useEffect } from 'react';
import Prism from 'prismjs';

import { Card } from '@gene/ui';
import { space, typography } from '@gene/token';
import styled from 'styled-components';
import { borderColor } from '@/styles/js';

const StylePreviewBlock = styled.div`
  width: 100%;
  border: 1px solid ${borderColor};
  margin-top: ${space(3)}px;
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${space(2)}px;
  width: 100%;
  margin-bottom: 0;
  border-bottom: 1px solid ${borderColor};
`;

const StyledCodeCard = styled(Card)`
  width: 100%;
  ${typography.body03};

  & {
    pre {
      padding: ${space(2)}px;
      background: transparent;
    }
  }
`;

const PreviewBlock = ({ code = '', children, ...props }) => {
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  }, []);

  return (
    <StylePreviewBlock {...props}>
      {children && (
        <StyledCard color="base" padding="lg">
          {children}
        </StyledCard>
      )}

      <StyledCodeCard padding="sm">
        <pre>
          <code className="language-jsx">{code}</code>
        </pre>
      </StyledCodeCard>
    </StylePreviewBlock>
  );
};

export default PreviewBlock;
