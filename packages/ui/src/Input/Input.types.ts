import { HTMLProps } from 'react';

export interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  required?: boolean;
}

export interface GeneInputProps {
  $color?: 'primary' | 'inherit';
}
