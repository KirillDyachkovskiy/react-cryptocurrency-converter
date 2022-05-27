import { TCoinIds } from '../../../data/types';

import { getPercentageDiff } from '../../../helpers';

import Icon from '../Icon';

import s from './currency.module.scss';

interface ICurrency {
  active?: boolean;
  id: TCoinIds;
  price: number;
  symbol: string;
  dynamics: number;
}

function Currency({ active = false, id, price, symbol, dynamics }: ICurrency) {
  const isGrow = dynamics >= 0;

  return (
    <article className={`${s.currency} ${active ? s.currency_active : ''}`}>
      <Icon name={id} className={s.currency__icon} />
      <div className={s.currency__info}>
        <p className={s.currency__price}>
          {price}
          <span className={s.currency__symbol}>{symbol}</span>
        </p>
        <p
          className={`${s.currency__dynamics} ${
            s[`currency__dynamics_${isGrow ? 'positive' : 'negative'}`]
          }`}
        >
          {getPercentageDiff(dynamics)}
        </p>
        <Icon
          name={isGrow ? 'trendUp' : 'trendDown'}
          className={s.currency__trend}
        />
      </div>
      {active && <div className={s.currency__shadow} />}
    </article>
  );
}

export default Currency;
