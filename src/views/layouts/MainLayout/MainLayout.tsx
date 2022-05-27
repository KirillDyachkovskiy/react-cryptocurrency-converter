import { Outlet } from 'react-router-dom';
import { TSidebarIcon } from '../../ui/Icon/Icon';

import { Icon, Navbar } from '../../ui';

import s from './mainLayout.module.scss';

const navbarItems = [
  { path: '/', label: 'Dashboard', icon: 'dashboard' as TSidebarIcon },
  { path: '/wallet', label: 'Wallet', icon: 'wallet' as TSidebarIcon },
];

function MainLayout() {
  return (
    <div className={s.mainLayout}>
      <aside className={s.mainLayout__aside}>
        <a href='https://bs.world/' className={s.mainLayout__logo}>
          <Icon name='logo' className={s.mainLayout__icon} />
          <h1>Blockchain solutions</h1>
        </a>
        <Navbar items={navbarItems} />
      </aside>
      <div className={s.mainLayout__main}>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
