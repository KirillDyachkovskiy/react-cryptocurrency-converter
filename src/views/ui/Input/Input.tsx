import { ChangeEvent, FocusEventHandler, useState } from 'react';
import s from './input.module.scss';

interface IInput {
  id: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

function Input({ id, onChange, placeholder, onBlur }: IInput) {
  const [value, setValue] = useState<string>('0');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/\D/g, '');

    setValue(newValue);
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
