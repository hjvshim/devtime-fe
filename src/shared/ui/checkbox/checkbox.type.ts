export type CheckboxUsage = 'regular' | 'todo';

export type CheckboxProps = {
  checked?: boolean;
  disabled?: boolean;
  usage?: CheckboxUsage; // (regular: 일반, todo: 할 일)
  onChange?: (checked: boolean) => void;
  className?: string;
  label?: string;
  id?: string;
};
