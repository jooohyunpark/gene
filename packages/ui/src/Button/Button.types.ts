import { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'base';
  variant?: 'fill' | 'outline' | 'subtle';
  expressive?: boolean;
}

export interface GeneButtonProps {
  $color?: 'primary' | 'base';
  $variant?: 'fill' | 'outline' | 'subtle';
  $expressive?: boolean;
}
