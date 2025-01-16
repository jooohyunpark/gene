import styled from 'styled-components';
import { space } from '@gene/token';
import { MediaAbove } from '@/styles/js';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: ${space(10)}px 0;

  ${MediaAbove('md')} {
    margin: ${space(15)}px 0;
  }

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  > {
    * + * {
      margin-block-end: ${space(3)}px;
    }

    *:first-child {
      margin-block-start: 0;
    }

    *:last-child {
      margin-block-end: 0;
    }

    h1 {
      margin-block-start: ${space(6)}px;
      margin-block-end: ${space(3)}px;
    }

    h2 {
      margin-block-start: ${space(4)}px;
      margin-block-end: ${space(2)}px;
    }

    h3 {
      margin-block-start: ${space(3)}px;
      margin-block-end: ${space(1.5)}px;
    }

    h4 {
      margin-block-start: ${space(2)}px;
      margin-block-end: ${space(1)}px;
    }

    h5 {
      margin-block-start: ${space(2)}px;
      margin-block-end: ${space(1)}px;
    }

    div:has(> table) {
      margin-block-start: ${space(3)}px;
    }
  }
`;
