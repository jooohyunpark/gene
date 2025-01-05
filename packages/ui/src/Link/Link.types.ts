import { ReactNode } from 'react';

export interface LinkProps {
  href: string;
  underline?: boolean;
  color?: boolean;
  children?: ReactNode;
}

export interface StyledLinkProps {
  $underline?: boolean;
  $color?: boolean;
}
