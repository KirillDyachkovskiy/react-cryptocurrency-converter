import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import ClickAwayListener from '../ClickAwayListener';
import Icon from '../Icon';

import s from './dropdown.module.scss';

interface IDropdown {
  children: (hideDropdown: Dispatch<SetStateAction<false>>) => ReactNode;
  element: ReactNode;
}

function Dropdown({ children, element }: IDropdown) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleDropdown = () => setIsVisible((prevState) => !prevState);

  const hideDropdown = () => setIsVisible(false);

  return (
    <div className={s.dropdown}>
      <ClickAwayListener onAwayClick={hideDropdown}>
        <div
          className={s.dropdown__element}
          onMouseDown={toggleDropdown}
          onKeyPress={toggleDropdown}
          tabIndex={0}
          role='listbox'
        >
          {element}
          <Icon
            name='chevron'
            className={`${s.dropdown__icon} ${
              isVisible ? s.dropdown__icon_active : ''
            }`}
          />
        </div>
        {isVisible && children(hideDropdown)}
      </ClickAwayListener>
    </div>
  );
}

export default Dropdown;
