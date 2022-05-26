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

  const { data } = useGetDataQuery({ currency: 'usd' as TCurrency, id });
  const { updateData } = useActions();

  useEffect(() => {
    if (data) {
      const payload = {
        id,
        value: data.current_price,
        dynamics: data.price_change_percentage_24h,
      };

      updateData(payload);
    }
  }, [data, id, updateData]);

  return (
    <div className={s.converter}>
      <Switcher name='currencySwitcher' selected={id} setSelected={setIds} />
      <section className={s.converter__chart}>
        <Chart selected={id} />
      </section>
    </div>
  );
}

export default Converter;
