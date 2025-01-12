import { ReactNode, MouseEventHandler } from 'react';

export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: 'primary' | 'base';
  variant?: 'fill' | 'outline' | 'subtle';
  expressive?: boolean;
  children?: ReactNode;
}

export interface GeneButtonProps {
  $color?: 'primary' | 'base';
  $variant?: 'fill' | 'outline' | 'subtle';
  $expressive?: boolean;
}
