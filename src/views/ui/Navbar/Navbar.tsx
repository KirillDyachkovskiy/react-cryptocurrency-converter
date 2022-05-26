import { NavLink } from 'react-router-dom';
import { TSidebarItem } from '../../../data/types';

import s from './navbar.module.scss';

interface ISidebar {
  items: TSidebarItem[];
}

function Navbar({ items }: ISidebar) {
  return (
    <nav>
      <ul className={s.navbar}>
        g
        {items.map(({ path, icon, label }: TSidebarItem) => (
          <li key={path}>
            <NavLink
              className={({ isActive }) =>
                `${s.navbar__item} ${isActive ? s.navbar__item_active : ''}`
              }
              to={path}
            >
              <i className={s.navbar__icon}>{icon}</i>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
