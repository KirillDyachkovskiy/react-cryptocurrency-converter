import { useAppSelector } from '../../hooks';
import { selectBalance } from '../../../data/redux';

import s from './balance.module.scss';
import { Icon } from '../../ui';

function Balance() {
  const balance = useAppSelector(selectBalance);

  return (
    <section className={s.balance}>
      <Icon name='usd' />
      <p className={s.balance__value}>{balance}</p>
    </section>
  );
}

export default Balance;
