import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'base';
  variant?: 'fill' | 'outline' | 'subtle';
  expressive?: boolean;
}

export interface GeneButtonProps {
  $color?: 'primary' | 'base';
  $variant?: 'fill' | 'outline' | 'subtle';
  $expressive?: boolean;
}
