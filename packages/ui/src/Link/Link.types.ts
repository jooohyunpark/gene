import { AnchorHTMLAttributes } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  underline?: boolean;
  color?: 'primary' | 'inherit';
  expressive?: boolean;
}

export interface GeneLinkProps {
  $underline?: boolean;
  $color?: 'primary' | 'inherit';
  $expressive?: boolean;
}
