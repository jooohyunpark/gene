import styled from 'styled-components';
import { space } from '@gene/token';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* row-gap: ${space(3)}px; */
  margin: ${space(10)}px 0;

  * + * {
    margin-block-start: ${space(2)}px;
  }

  * + h1 {
    margin-block-start: ${space(8)}px;
    margin-block-end: ${space(4)}px;
  }

  * + h2 {
    margin-block-start: ${space(6)}px;
  }

  * + h3 {
    margin-block-start: ${space(4)}px;
  }

  * + h4 {
    margin-block-start: ${space(3)}px;
  }

  * + h5 {
    margin-block-start: ${space(2)}px;
  }

  /* :not(* + :is(h1, h2, h3, h4, h5, h6)) {
    margin-block-start: 0;
  } */

  /* & > * + :is(h1, h2, h3, h4, h5, h6) {
    margin-block-start: 1em;
  } */

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
