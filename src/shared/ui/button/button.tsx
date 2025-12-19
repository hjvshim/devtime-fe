import type { ButtonProps } from './button.type';

const Button = ({
  variant = 'primary',
  size = 'auto',
  textSize = 'default',
  disabled = false,
  children,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) => {
  // Text size & height config
  const textSizeConfig = {
    default: 'h-12 text-subtitle-s', // 48px height, 18px font
    small: 'h-11 text-body-small-s', // 44px height, 14px font
  };

  // Base styles
  const baseStyles = `${textSizeConfig[textSize]} px-4 py-3 rounded-[5px] transition-colors duration-200 focus:outline-none`;

  // Size styles
  const sizeStyles = {
    fixed: 'w-[120px]', // 고정 너비 (필요시 조정)
    fill: 'w-full',
    auto: 'w-auto',
  };

  // Variant + State styles
  const getVariantStyles = () => {
    if (disabled) {
      // Disabled state - variant별로 다르게 적용
      switch (variant) {
        case 'primary':
          return 'bg-gray-400 text-gray-300 cursor-not-allowed';
        case 'secondary':
        case 'tertiary':
          return 'bg-gray-200 text-gray-400 cursor-not-allowed';
        default:
          return '';
      }
    }

    switch (variant) {
      case 'primary':
        return 'bg-primary text-white hover:bg-primary-state active:bg-primary-state focus:ring-2 focus:ring-fuchsia';

      case 'secondary':
        return 'bg-primary-10 text-primary hover:bg-primary-10-state active:bg-primary-10-state focus:ring-2 focus:ring-fuchsia';

      case 'tertiary':
        return 'bg-gray-50 text-primary hover:bg-gray-50-state active:bg-gray-50-state focus:ring-2 focus:ring-fuchsia';

      default:
        return '';
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
