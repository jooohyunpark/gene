import styled from 'styled-components';
import { space } from '@gene/token';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: ${space(3)}px;

  margin: ${space(10)}px 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
