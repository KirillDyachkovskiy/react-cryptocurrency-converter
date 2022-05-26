import { getPercentageDiff } from '../../../helpers';

import Image from '../Image';

import s from './currency.module.scss';

interface ICurrency {
  active?: boolean;
  image: string;
  price: number;
  symbol: string;
  dynamics: number;
}

function Currency({
  active = false,
  image,
  price,
  symbol,
  dynamics,
}: ICurrency) {
  return (
    <article className={`${s.currency} ${active ? s.currency_active : ''}`}>
      <div className={s.currency__icon}>
        <Image src={image} alt={symbol} />
      </div>
      <div className={s.currency__info}>
        <p className={s.currency__price}>
          {price}
          <span className={s.currency__symbol}>{symbol}</span>
        </p>
        <p
          className={`${s.currency__dynamics} ${
            s[`currency__dynamics_${dynamics >= 0 ? 'negative' : 'positive'}`]
          }`}
        >
          {getPercentageDiff(dynamics)}
        </p>
      </div>
      {active && <div className={s.currency__shadow} />}
    </article>
  );
}

export default Currency;
