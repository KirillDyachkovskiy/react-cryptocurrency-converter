import { Outlet } from 'react-router-dom';

import s from './mainLayout.module.scss';

function MainLayout() {
  return (
    <>
      <header className={s.mainLayout}>Header</header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
