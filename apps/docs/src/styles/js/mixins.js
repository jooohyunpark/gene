import { breakpoints } from './vars';

export const MediaBelow = (key) =>
  `@media (max-width: ${breakpoints[key] - 1}px)`;

export const MediaAbove = (key) => `@media (min-width: ${breakpoints[key]}px)`;
