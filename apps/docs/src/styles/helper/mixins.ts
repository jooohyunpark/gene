import { css, CSSObject } from 'styled-components';
import { breakpoints, padding } from './vars';

type MediaKeyProp = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface PaddingProp {
  x: boolean;
  y: boolean;
}

export const MediaBelow = (key: MediaKeyProp) =>
  `@media (max-width: ${breakpoints[key] - 1}px)`;

export const MediaAbove = (key: MediaKeyProp) =>
  `@media (min-width: ${breakpoints[key]}px)`;

export const SetPadding = (config: PaddingProp = { x: true, y: true }) => css`
  ${config?.x &&
  css`
    padding-left: ${padding.x.sm}px;
    padding-right: ${padding.x.sm}px;

    ${MediaAbove('md')} {
      padding-left: ${padding.x.md}px;
      padding-right: ${padding.x.md}px;
    }
  `}

  ${config?.y &&
  css`
    padding-top: ${padding.y.sm}px;
    padding-bottom: ${padding.y.sm}px;

    ${MediaAbove('md')} {
      padding-top: ${padding.y.md}px;
      padding-bottom: ${padding.y.md}px;
    }
  `}
`;

export const OnHover = (styles: CSSObject | undefined) => css`
  @media (hover: hover) {
    &:hover {
      ${styles};
    }
  }
`;
