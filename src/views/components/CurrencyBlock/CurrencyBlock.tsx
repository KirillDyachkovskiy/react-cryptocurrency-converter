import { TBalanceItem } from '../../../data/types';

import { selectBalance } from '../../../data/redux';
import { useAppSelector } from '../../hooks';

import Currency from './Currency';

import s from './currencyBlock.module.scss';

function CurrencyBlock() {
  const { accounts } = useAppSelector(selectBalance);

  return (
    <section className={s.currencyBlock}>
      {accounts.map((currency: TBalanceItem) => (
        <Currency key={currency.symbol} {...currency} />
      ))}
    </section>
  );
}

export default CurrencyBlock;
