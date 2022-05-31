import { useState } from 'react';
import { TBalanceItem } from '../../../data/types';

import { getPercentageDiff, roundNumber } from '../../../helpers';

import CurrencyMenu from './CurrencyMenu';
import { Button, Icon } from '../../ui';

import s from './currencyBlock.module.scss';

function Currency({ symbol, count, dynamics, balance }: TBalanceItem) {
  const isGrow = dynamics >= 0;

  const [active, setActive] = useState<boolean>(false);

  const showPopup = () => setActive(true);
  const hidePopup = () => setActive(false);

  return (
    <>
      <Button variant='air' onClick={showPopup}>
        <article className={s.currency}>
          <Icon name={symbol} className={s.currency__icon} />
          <p className={s.currency__actual}>
            <span
              className={`${s.currency__price} ${
                s[`currency__dynamics_${isGrow ? 'positive' : 'negative'}`]
              }`}
            >
              {' '}
              {roundNumber(balance)}
            </span>
            <span className={s.currency__symbol}>USD</span>
          </p>
          <div className={s.currency__info}>
            <p className={s.currency__price}>
              {count}
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
        </article>
      </Button>
      <CurrencyMenu
        active={active}
        hidePopup={hidePopup}
        symbol={symbol}
        count={count}
      />
    </>
  );
}

export default Currency;
