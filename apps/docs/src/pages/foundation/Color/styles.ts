import { space, typography } from '@jooohyunpark/gene-token';
import styled, { css } from 'styled-components';

interface BoxProps {
  $background?: string;
  $color?: string;
  $border?: string;
}

export const Box = styled.div<BoxProps>`
  width: 20%;
  max-width: ${space(15)}px;
  aspect-ratio: 1 / 1;
  background-color: ${({ $background }) => $background};
  color: ${({ $color }) => $color};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${space(1)}px;
  font-weight: ${typography.fontWeight700};
  font-size: ${typography.fontSize20};

  ${({ $border }) =>
    $border &&
    css`
      border: 1px solid ${$border};
    `}
`;

export const BoxRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
  margin: 0;
`;
