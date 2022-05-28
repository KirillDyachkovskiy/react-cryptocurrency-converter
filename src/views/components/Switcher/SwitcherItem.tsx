import { TSymbol } from '../../../data/types';
import { getPercentageDiff } from '../../../helpers';

import Icon from '../../ui/Icon';

import s from './switcher.module.scss';

interface ISwitcherItem {
  active?: boolean;
  price: number;
  symbol: TSymbol;
  dynamics: number;
}

function SwitcherItem({
  active = false,
  price,
  symbol,
  dynamics,
}: ISwitcherItem) {
  const isGrow = dynamics >= 0;

  return (
    <article
      className={`${s.switcherItem} ${active ? s.switcherItem_active : ''}`}
    >
      <Icon name={symbol} className={s.switcherItem__icon} />
      <div className={s.switcherItem__info}>
        <p className={s.switcherItem__price}>
          {price}
          <span className={s.switcherItem__symbol}>{symbol}</span>
        </p>
        <p
          className={`${s.switcherItem__dynamics} ${
            s[`switcherItem__dynamics_${isGrow ? 'positive' : 'negative'}`]
          }`}
        >
          {getPercentageDiff(dynamics)}
        </p>
        <Icon
          name={isGrow ? 'trendUp' : 'trendDown'}
          className={s.switcherItem__trend}
        />
      </div>
      {active && <div className={s.switcherItem__shadow} />}
    </article>
  );
}

export default SwitcherItem;
