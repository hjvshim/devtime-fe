import { Button } from '@/shared/ui/button';
import type { TextFieldProps } from './text-field.type';

const TextField = ({
  label,
  error,
  buttonText,
  onButtonClick,
  buttonDisabled = false,
  className = '',
  onChange,
  ...inputProps
}: TextFieldProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const hasButton = !!buttonText;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={inputProps.id}
        className="text-body-small-m text-gray-600"
      >
        {label}
      </label>

      <div className="flex gap-3 items-center">
        {/* 입력 필드 */}
        <input
          {...inputProps}
          onChange={handleInputChange}
          className={`
            ${hasButton ? 'flex-1' : 'w-full'}
            h-11 px-4 py-3
            bg-gray-50
            rounded-[5px]
            text-body-m
            placeholder:text-gray-300
            transition-colors duration-200
            ${inputProps.disabled ? 'cursor-not-allowed opacity-60' : ''}
            ${error ? 'border border-negative' : 'border-0'}
            focus:outline-none focus:ring-2 focus:ring-primary
          `}
        />

        {/* 오른쪽 버튼 (옵션) */}
        {hasButton && (
          <Button
            type="button"
            onClick={onButtonClick}
            disabled={buttonDisabled || inputProps.disabled}
            variant="primary"
            size="auto"
            className="h-11"
          >
            {buttonText}
          </Button>
        )}
      </div>

      {/* 에러 메시지 */}
      {error && <p className="text-body-small-m text-negative">{error}</p>}
    </div>
  );
};

export default TextField;
