import { useEffect, useState } from 'react';
import { useGetDataQuery } from '../../../data/redux/cryptoAPI';
import { useTitle } from '../../hooks';

import { TCoinIds, TCurrency } from '../../../data/types';

import useActions from '../../hooks/useActions';

import { Chart, Switcher } from '../../components';
import { Radiobutton, Radiobuttons } from '../../ui';

import s from './converter.module.scss';

function Converter() {
  useTitle('Converter');

  const [id, setIds] = useState<TCoinIds>('bitcoin');
  const [days, setDays] = useState<number>(14);

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
        <h2 className={s.converter__title}>Dashboard</h2>
        <p className={s.converter__subtitle}>
          World&apos;s best cryptocurrency exchange
        </p>
      </header>
      <Switcher name='currencySwitcher' selected={id} setSelected={setIds} />
      <div className={s.converter__chart}>
        <Chart id={id} days={days} />
      </div>
      <Radiobuttons name='currencyDays' selected={days} setSelected={setDays}>
        <Radiobutton label='1 day' value={1} />
        <Radiobutton label='1 week' value={7} />
        <Radiobutton label='14 days' value={14} />
        <Radiobutton label='1 month' value={30} />
      </Radiobuttons>
    </section>
  );
}

export default Converter;
