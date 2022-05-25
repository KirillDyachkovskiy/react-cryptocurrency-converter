import { ChangeEventHandler, FocusEventHandler, RefObject } from 'react';
import s from './input.module.scss';

interface IInput {
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  customRef?: RefObject<HTMLInputElement>;
}

export default function Input({
  id,
  value,
  onChange,
  placeholder,
  onBlur,
  customRef,
}: IInput) {
  return (
    <label htmlFor={id}>
      <input
        ref={customRef}
        id={id}
        className={s.input}
        type='text'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
      />
    </label>
  );
}
