import styled from 'styled-components';
import { space, typography } from '@gene/token';
import { SetPadding, borderColor } from '@/styles/js';

export const StyledFooter = styled.footer`
  border-top: 1px solid ${borderColor};

  ${SetPadding({ x: true, y: false })};

  ${typography.label02};

  && {
    padding-top: ${space(3)}px;
    padding-bottom: ${space(3)}px;
  }
`;
