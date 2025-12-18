import type { InputHTMLAttributes } from 'react';

export type TextFieldProps = {
  label: string;
  error?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonDisabled?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    onChange?: (value: string) => void;
  };
