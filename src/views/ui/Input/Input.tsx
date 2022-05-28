import { ChangeEvent, FocusEventHandler } from 'react';
import s from './input.module.scss';

interface IInput {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onlyNumbers?: boolean;
}

function Input({
  id,
  value,
  onChange,
  placeholder,
  onBlur,
  onlyNumbers = false,
}: IInput) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (onlyNumbers) {
      newValue.replace(/\D/g, '');
    }

    onChange(newValue);
  };

  return (
    <label htmlFor={id}>
      <input
        id={id}
        className={s.input}
        type='text'
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        onBlur={onBlur}
      />
    </label>
  );
}

export default Input;
