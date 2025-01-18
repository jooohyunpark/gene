import { HTMLAttributes } from 'react';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface GeneInputProps {
  $color?: 'primary' | 'inherit';
}
