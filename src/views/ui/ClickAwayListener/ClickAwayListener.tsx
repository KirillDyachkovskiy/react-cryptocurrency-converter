import { FocusEvent, ReactNode, useCallback, useEffect, useRef } from 'react';
import s from './clickAwayListener.module.scss';

interface IClickAwayListener {
  children: ReactNode;
  onAwayClick: () => void;
}

function ClickAwayListener({ children, onAwayClick }: IClickAwayListener) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent | FocusEvent<HTMLDivElement>) => {
      if (
        (event.relatedTarget &&
          !wrapperRef?.current?.contains(event.relatedTarget as Node)) ||
        (event.target && !wrapperRef?.current?.contains(event.target as Node))
      ) {
        onAwayClick();
      }
    },
    [onAwayClick]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div
      className={s.listener}
      ref={wrapperRef}
      onBlur={(e: FocusEvent<HTMLDivElement>) => handleClickOutside(e)}
    >
      {children}
    </div>
  );
}

export default ClickAwayListener;
