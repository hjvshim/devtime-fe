export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export type ButtonSize = 'fixed' | 'fill' | 'auto';

export type ButtonTextSize = 'default' | 'small';

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  textSize?: ButtonTextSize;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};
