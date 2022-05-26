import { useEffect, useState } from 'react';
import { useGetDataQuery } from '../../../data/redux/cryptoAPI';
import { useTitle } from '../../hooks';

import { TCoinIds, TCurrency } from '../../../data/types';

import { Switcher } from '../../components';
import useActions from '../../hooks/useActions';
import Chart from '../../components/Chart';

import s from './converter.module.scss';

function Converter() {
  useTitle('Converter');

  const [id, setIds] = useState<TCoinIds>('bitcoin');

  const { data: bitcoin } = useGetDataQuery({
    currency: 'usd' as TCurrency,
    id: 'bitcoin',
  });
  const { data: ethereum } = useGetDataQuery({
    currency: 'usd' as TCurrency,
    id: 'ethereum',
  });
  const { updateData } = useActions();

  useEffect(() => {
    if (bitcoin) {
      updateData(bitcoin);
    }
    if (ethereum) {
      updateData(ethereum);
    }
  }, [bitcoin, ethereum, updateData]);

  return (
    <section className={s.converter}>
      <header className={s.converter__header}>
        <h1 className={s.converter__title}>Dashboard</h1>
        <p className={s.converter__subtitle}>
          World&apos;s best cryptocurrency exchange
        </p>
      </header>
      <Switcher name='currencySwitcher' selected={id} setSelected={setIds} />
      <section className={s.converter__chart}>
        <Chart selected={id} />
      </section>
    </section>
  );
}

export default Converter;
