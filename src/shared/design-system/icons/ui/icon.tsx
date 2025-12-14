import type { IconName, IconSize, IconVariant } from '../types/icon.type';

type IconProps = {
  name: IconName;
  size?: IconSize;
  variant?: IconVariant;
  className?: string;
};

const ICON_SIZES: Record<IconSize, number> = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
};

const Icon = ({
  name,
  size = 'md',
  variant = 'outlined',
  className = '',
}: IconProps) => {
  const iconSize = ICON_SIZES[size];
  const variantSuffix = variant === 'outlined' ? '-outlined' : '';
  const iconPath = `/src/shared/design-system/icons/assets/${name}${variantSuffix}.svg`;

  return (
    <img
      src={iconPath}
      alt={`${name} icon`}
      width={iconSize}
      height={iconSize}
      className={className}
      style={{ display: 'inline-block' }}
    />
  );
};

export default Icon;
