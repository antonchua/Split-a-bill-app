import styles from './input.module.scss';
import { ChangeEvent } from 'react';

type InputType = {
  type: 'text' | 'number';
  disabled?: boolean;
  id: string;
  name: string;
  widthType: 'small' | 'medium';
  value?: string;
  defaultValue?: string;
  onChange?(e: ChangeEvent<HTMLInputElement>): void;
};

export const Input = ({ type, widthType, value, onChange, disabled, defaultValue }: InputType) => {
  return (
    <input
      defaultValue={defaultValue}
      disabled={disabled || false}
      type={type}
      className={styles[widthType]}
      value={value}
      onChange={onChange}
    />
  );
};
