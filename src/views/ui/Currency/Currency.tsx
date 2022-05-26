import { BiTrendingDown, BiTrendingUp } from 'react-icons/bi';

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
  const isGrow = dynamics >= 0;

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
            s[`currency__dynamics_${isGrow ? 'positive' : 'negative'}`]
          }`}
        >
          {getPercentageDiff(dynamics)}
        </p>
        {isGrow ? (
          <BiTrendingUp className={s.currency__trend} />
        ) : (
          <BiTrendingDown className={s.currency__trend} />
        )}
      </div>
      {active && <div className={s.currency__shadow} />}
    </article>
  );
}

export default Currency;
