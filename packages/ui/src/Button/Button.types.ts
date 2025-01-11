import { ReactNode, MouseEventHandler } from 'react';

export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: 'primary' | 'neutral';
  type?: 'fill' | 'outline' | 'empty';
  expressive?: boolean;
  children?: ReactNode;
}

export interface GeneButtonProps {
  $variant?: 'primary' | 'neutral';
  $type?: 'fill' | 'outline' | 'empty';
  $expressive?: boolean;
}
