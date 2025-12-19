import { Icon } from '@/shared/design-system';
import type { CheckboxProps } from './checkbox.type';

const Checkbox = ({
  checked = false,
  disabled = false,
  usage = 'regular',
  onChange,
  className = '',
  label,
  labelPosition = 'right',
  labelClassName = '',
  id,
}: CheckboxProps) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleChange();
    }
  };

  // 체크박스 스타일
  const getCheckboxStyles = () => {
    const isRegular = usage === 'regular';
    const size = isRegular ? 'size-4' : 'size-7'; // 16px vs 28px
    const rounded = isRegular ? 'rounded-[5px]' : 'rounded-[8px]';
    const borderWidth = isRegular ? 'border' : 'border-[1.5px]';

    const baseStyles = `relative ${size} ${rounded} ${borderWidth} transition-colors duration-200`;

    if (disabled) {
      return `${baseStyles} ${
        checked ? 'bg-gray-300 border-gray-300' : 'bg-gray-100 border-gray-300'
      } cursor-not-allowed`;
    }

    // Regular 타입
    if (isRegular) {
      if (checked) {
        return `${baseStyles} bg-primary-10 border-primary hover:border-primary-hover`;
      }
      return `${baseStyles} bg-white border-primary hover:border-primary-hover focus-within:ring-2 focus-within:ring-fuchsia`;
    }

    // todo 타입
    if (checked) {
      return `${baseStyles} bg-white/50 border-white hover:bg-white/60`;
    }
    return `${baseStyles} bg-transparent border-white hover:border-white/80 focus-within:ring-2 focus-within:ring-white/50`;
  };

  // 아이콘 색상
  const getIconColor = () => {
    if (disabled) return 'text-gray-400';
    if (usage === 'todo') return 'text-white';
    return 'text-primary';
  };

  // 체크박스 엘리먼트
  const checkboxElement = (
    <div
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleChange}
      onKeyDown={handleKeyDown}
      className={getCheckboxStyles()}
    >
      {checked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon name="check" size="xs" className={getIconColor()} />
        </div>
      )}
      <input
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className="sr-only"
        aria-hidden="true"
      />
    </div>
  );

  // 라벨 엘리먼트
  const labelElement = label && (
    <label
      htmlFor={id}
      className={
        labelClassName ||
        `text-body-m ${disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-800 cursor-pointer'}`
      }
    >
      {label}
    </label>
  );

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {labelPosition === 'left' && labelElement}
      {checkboxElement}
      {labelPosition === 'right' && labelElement}
    </div>
  );
};

export default Checkbox;
