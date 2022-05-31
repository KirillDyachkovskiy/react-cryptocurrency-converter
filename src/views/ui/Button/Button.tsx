import { MouseEventHandler, ReactNode } from 'react';

import s from './button.module.scss';

interface IButton {
  children: ReactNode;
  variant?: 'button' | 'air';
  htmlType?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({
  children,
  variant = 'button',
  htmlType = 'button',
  disabled = false,
  onClick,
}: IButton) {
  return (
    <button
      type={htmlType === 'button' ? 'button' : 'submit'}
      className={`${s.button} ${s[`button_variant_${variant}`]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
