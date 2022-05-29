import { selectBalance, selectBalanceValue } from '../../../data/redux';

import { useAppSelector } from '../../hooks';

import Balancebar from './Balancebar';
import { Icon } from '../../ui';

import s from './balance.module.scss';

function Balance() {
  const { symbol } = useAppSelector(selectBalance);
  const balance = useAppSelector(selectBalanceValue);

  return (
    <section className={s.balance}>
      <p className={s.balance__info}>
        <Icon name={symbol} className={s.balance__icon} />
        <span className={s.balance__value}>{balance}</span>
      </p>
      <Balancebar />
    </section>
  );
}

export default Balance;
