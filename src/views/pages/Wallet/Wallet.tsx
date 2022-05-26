import { useEffect, useState } from 'react';
import { useGetCoinDataQuery } from '../../../data/redux/cryptoAPI';
import { useTitle } from '../../hooks';

import { TCoinIds, TCurrency } from '../../../data/types';

import { Switcher } from '../../components';
import useActions from '../../hooks/useActions';

function Wallet() {
  useTitle('Wallet');

  const [id, setIds] = useState<TCoinIds>('bitcoin');

  const { data } = useGetCoinDataQuery({ currency: 'usd' as TCurrency, id });
  const { updateData } = useActions();

  useEffect(() => {
    if (data) {
      const payload = {
        id,
        value: data[0].current_price,
        dynamics: data[0].price_change_percentage_24h,
      };

      updateData(payload);
    }
  }, [data, id, updateData]);

  return (
    <>
      <Switcher name='currencySwitcher' selected={id} setSelected={setIds} />
      <pre>{JSON.stringify(data)}</pre>
    </>
  );
}

export default Wallet;
