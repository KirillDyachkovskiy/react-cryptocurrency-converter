import { NavLink } from 'react-router-dom';

import s from './navbar.module.scss';

type TSidebarItem = {
  path: string;
  label: string;
};

interface ISidebar {
  items: TSidebarItem[];
}

function Navbar({ items }: ISidebar) {
  return (
    <nav>
      <ul className={s.navbar}>
        {items.map((item: TSidebarItem) => (
          <li key={item.path}>
            <NavLink
              className={({ isActive }) =>
                `${s.navbar__item} ${isActive ? s.navbar__item_active : ''}`
              }
              to={item.path}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
