import { typography } from '@jooohyunpark/gene-token';
import styled from 'styled-components';

interface ExampleTextProps {
  $token?: keyof typeof typography;
}

export const ExampleText = styled.div<ExampleTextProps>`
  ${({ $token }) => $token && typography[$token]};
  white-space: nowrap;
`;
