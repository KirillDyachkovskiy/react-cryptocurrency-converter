import { NavLink } from 'react-router-dom';
import { TSidebarIcon } from '../Icon/Icon';

import Icon from '../Icon';

import s from './navbar.module.scss';

type TSidebarItem = {
  path: string;
  label: string;
  icon: TSidebarIcon;
};

interface ISidebar {
  items: TSidebarItem[];
}

function Navbar({ items }: ISidebar) {
  return (
    <nav>
      <ul className={s.navbar}>
        {items.map(({ path, icon, label }: TSidebarItem) => (
          <li key={path}>
            <NavLink
              className={({ isActive }) =>
                `${s.navbar__item} ${isActive ? s.navbar__item_active : ''}`
              }
              to={path}
            >
              <Icon name={icon} className={s.navbar__icon} />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
