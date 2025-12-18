export type TextFieldProps = {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'password' | 'email';
  disabled?: boolean;
  error?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonDisabled?: boolean;
  className?: string;
  id?: string;
};
