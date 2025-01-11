import { ReactNode } from 'react';

export interface LinkProps {
  href: string;
  underline?: boolean;
  color?: 'primary' | 'inherit';
  // expressive?: boolean;
  children?: ReactNode;
}

export interface GeneLinkProps {
  $underline?: boolean;
  $color?: 'primary' | 'inherit';
  // $expressive?: boolean;
}
