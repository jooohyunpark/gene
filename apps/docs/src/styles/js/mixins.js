import { css } from 'styled-components';
import { breakpoints, paddingX, paddingY } from './vars';

export const MediaBelow = (key) =>
  `@media (max-width: ${breakpoints[key] - 1}px)`;

export const MediaAbove = (key) => `@media (min-width: ${breakpoints[key]}px)`;

export const ContentPadding = (config = { x: true, y: true }) => css`
  ${config?.x &&
  css`
    padding-left: ${paddingX.mobile}px;
    padding-right: ${paddingX.mobile}px;

    ${MediaAbove('md')} {
      padding-left: ${paddingX.desktop}px;
      padding-right: ${paddingX.desktop}px;
    }
  `}

  ${config?.y &&
  css`
    padding-top: ${paddingY.mobile}px;
    padding-bottom: ${paddingY.mobile}px;

    ${MediaAbove('md')} {
      padding-top: ${paddingY.desktop}px;
      padding-bottom: ${paddingY.desktop}px;
    }
  `}
`;
