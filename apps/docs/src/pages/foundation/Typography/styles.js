import { typography } from '@jooohyunpark/gene-token';
import styled from 'styled-components';

export const ExampleText = styled.div`
  ${({ $token }) => typography[`${$token}`]};
  white-space: nowrap;
`;
