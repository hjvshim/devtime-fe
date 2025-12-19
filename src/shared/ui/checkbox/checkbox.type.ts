export type CheckboxUsage = 'regular' | 'todo';

export type CheckboxLabelPosition = 'left' | 'right';

export type CheckboxProps = {
  checked?: boolean;
  disabled?: boolean;
  usage?: CheckboxUsage; // (regular: 일반, todo: 할 일)
  onChange?: (checked: boolean) => void;
  className?: string;
  label?: string;
  labelPosition?: CheckboxLabelPosition; // 라벨 위치 (기본값: right)
  labelClassName?: string; // 라벨 커스텀 스타일
  id?: string;
};
