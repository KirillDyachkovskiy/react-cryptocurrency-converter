import { TCoinIds } from '../../../data/types';

import { getPercentageDiff } from '../../../helpers';

import Icon from '../../ui/Icon';

import s from './switcher.module.scss';

interface ISwitcherItem {
  active?: boolean;
  id: TCoinIds;
  price: number;
  symbol: string;
  dynamics: number;
}

function SwitcherItem({
  active = false,
  id,
  price,
  symbol,
  dynamics,
}: ISwitcherItem) {
  const isGrow = dynamics >= 0;

  return (
    <article
      className={`${s.switcherItem} ${active ? s.switcherItem_active : ''}`}
    >
      <Icon name={id} className={s.switcherItem__icon} />
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
