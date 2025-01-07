import { ReactNode } from 'react';

export interface LinkProps {
  href: string;
  underline?: boolean;
  color?: boolean;
  children?: ReactNode;
}

export interface GeneLinkProps {
  $underline?: boolean;
  $color?: boolean;
}
