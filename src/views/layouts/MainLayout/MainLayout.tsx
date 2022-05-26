import { Outlet } from 'react-router-dom';

import { RiDashboardFill } from 'react-icons/ri';
import { IoIosWallet } from 'react-icons/io';

import { Navbar } from '../../ui';

import s from './mainLayout.module.scss';

const navbarItems = [
  { path: '/', label: 'Converter', icon: <RiDashboardFill /> },
  { path: '/wallet', label: 'Wallet', icon: <IoIosWallet /> },
];

function MainLayout() {
  return (
    <div className={s.mainLayout}>
      <aside className={s.mainLayout__aside}>
        <Navbar items={navbarItems} />
      </aside>
      <main className={s.mainLayout__main}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
