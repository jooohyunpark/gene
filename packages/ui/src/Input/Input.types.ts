import { InputHTMLAttributes } from 'react';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  label?: string;
  required?: boolean;
}

export interface GeneInputProps {
  $color?: 'primary' | 'inherit';
}
