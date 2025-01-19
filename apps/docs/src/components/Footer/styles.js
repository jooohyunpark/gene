import styled from 'styled-components';
import { space, typography } from '@jooohyunpark/gene-token';
import { SetPadding, borderColor } from '@/styles/js';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  column-gap: ${space(1.5)}px;
  border-top: 1px solid ${borderColor};
  ${typography.label02};

  ${SetPadding({ x: true, y: false })};

  && {
    padding-top: ${space(3)}px;
    padding-bottom: ${space(3)}px;
  }
`;
