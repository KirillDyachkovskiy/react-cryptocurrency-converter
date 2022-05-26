import { getPercentageDiff } from '../../../helpers';

import Image from '../Image';

import s from './currency.module.scss';

interface ICurrency {
  active?: boolean;
  image: string;
  value: number;
  symbol: string;
  dynamics: number;
}

function Currency({
  active = false,
  image,
  value,
  symbol,
  dynamics,
}: ICurrency) {
  return (
    <article className={`${s.currency} ${active ? s.currency_active : ''}`}>
      <div className={s.currency__icon}>
        <Image src={image} alt={symbol} />
      </div>
      <div className={s.currency__info}>
        <p className={s.currency__value}>
          {value}
          <span className={s.currency__symbol}>{symbol}</span>
        </p>
        <p className={s.currency__dynamics}>{getPercentageDiff(dynamics)}</p>
      </div>
    </article>
  );
}

export default Currency;
