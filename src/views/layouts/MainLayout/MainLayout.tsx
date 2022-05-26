import { Outlet } from 'react-router-dom';

import { Navbar } from '../../ui';

import s from './mainLayout.module.scss';

const navbarItems = [
  { path: '/', label: 'Converter' },
  { path: '/wallet', label: 'Wallet' },
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
