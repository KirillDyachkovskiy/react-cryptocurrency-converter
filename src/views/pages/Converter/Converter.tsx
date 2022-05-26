import { useEffect } from 'react';
import { useGetDataQuery } from '../../../data/redux/cryptoAPI';
import { useActions, useTitle } from '../../hooks';

import { TCurrency } from '../../../data/types';

import { ContentLayout } from '../../layouts';
import { Chart, Daysbar, Switcher } from '../../components';

import s from './converter.module.scss';

function Converter() {
  useTitle('Converter');

  const { data: bitcoin } = useGetDataQuery({
    currency: 'usd' as TCurrency,
    id: 'bitcoin',
  });
  const { data: ethereum } = useGetDataQuery({
    currency: 'usd' as TCurrency,
    id: 'ethereum',
  });
  const { setData } = useActions();

  useEffect(() => {
    if (bitcoin) {
      setData(bitcoin);
    }
    if (ethereum) {
      setData(ethereum);
    }
  }, [bitcoin, ethereum, setData]);

  return (
    <ContentLayout title='Dashboard'>
      <main className={s.converter}>
        <Switcher name='currencySwitcher' />
        <Chart />
        <Daysbar />
      </main>
    </ContentLayout>
  );
}

export default Converter;
