import { useTitle } from '../../hooks';

import { ContentLayout } from '../../layouts';
import { Chart, Daysbar, Switcher } from '../../components';

import s from './dashboard.module.scss';

function Dashboard() {
  useTitle('Dashboard');

  return (
    <ContentLayout title='Dashboard'>
      <main className={s.dashboard}>
        <Switcher name='currencySwitcher' />
        <Chart />
        <Daysbar />
      </main>
    </ContentLayout>
  );
}

export default Dashboard;
