import { useTitle } from '../../hooks';

import { ContentLayout } from '../../layouts';
import { Chart, Converter, Daysbar, Switcher } from '../../components';

import s from './dashboard.module.scss';

interface IDashboard {
  isFetching: boolean;
  refetch: () => void;
}

function Dashboard({ refetch, isFetching }: IDashboard) {
  useTitle('Dashboard');

  return (
    <ContentLayout title='Dashboard'>
      <main className={s.dashboard}>
        <div className={s.dashboard__chart}>
          <Switcher name='currencySwitcher' />
          <Chart />
          <Daysbar />
        </div>
        <Converter isFetching={isFetching} refetch={refetch} />
      </main>
    </ContentLayout>
  );
}

export default Dashboard;
