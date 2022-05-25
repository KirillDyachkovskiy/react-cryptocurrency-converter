import { Outlet } from 'react-router-dom';

import { Navbar } from '../../ui';

import s from './mainLayout.module.scss';

const navbarItems = [
  { path: '/', label: 'Converter' },
  { path: '/wallet', label: 'Wallet' },
];

function MainLayout() {
  return (
    <>
      <header className={s.mainLayout}>Header</header>
      <main className={s.mainLayout__main}>
        <Navbar items={navbarItems} />
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
