export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export type ButtonSize = 'fixed' | 'fill' | 'auto';

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};
