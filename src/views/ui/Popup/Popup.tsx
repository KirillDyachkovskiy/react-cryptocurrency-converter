import { MouseEvent, ReactNode } from 'react';

import s from './popup.module.scss';

export type PopupProps = {
  children: ReactNode;
  onClose?: () => void;
  active?: boolean;
};

function Popup({ children, active, onClose }: PopupProps) {
  const preventPropagation = (e: MouseEvent<HTMLDivElement>) =>
    e.stopPropagation();

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
    <div
      className={`${s.popup} ${active ? s.popup_active : ''}`}
      onClick={onClose}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className={`${s.popup__body} ${active ? s.popup__body_active : ''}`}
        onClick={preventPropagation}
      >
        {children}
      </div>
    </div>
  );
}

export default Popup;
