import { useEffect } from 'react';
import { useGetDataQuery } from '../../../data/redux/cryptoAPI';
import { useActions, useTitle } from '../../hooks';

import { TCurrency } from '../../../data/types';

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
    <section className={s.converter}>
      <header className={s.converter__header}>
        <h2 className={s.converter__title}>Dashboard</h2>
        <p className={s.converter__subtitle}>
          World&apos;s best cryptocurrency exchange
        </p>
      </header>
      <Switcher name='currencySwitcher' />
      <Chart />
      <Daysbar />
    </section>
  );
}

export default Converter;
