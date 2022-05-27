import { MouseEventHandler, ReactNode } from 'react';
import s from './button.module.scss';

interface IButton {
  children: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  htmlType?: 'button' | 'submit';
}

export default function Button({
  children,
  onClick,
  disabled = false,
  htmlType = 'button',
}: IButton) {
  return (
    <button
      className={s.button}
      type={htmlType === 'button' ? 'button' : 'submit'}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
