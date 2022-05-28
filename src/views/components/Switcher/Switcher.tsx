import { TCoin, TCoinSymbol } from '../../../data/types';
import { selectChart, selectCoins } from '../../../data/redux';

import { useActions, useAppSelector } from '../../hooks';

import SwitcherItem from './SwitcherItem';

import s from './switcher.module.scss';

interface ISwitcher {
  name: string;
}

function Switcher({ name }: ISwitcher) {
  const { symbol: selected } = useAppSelector(selectChart);

  const { setChartSymbol } = useActions();

  const switchCoin = (symbol: TCoinSymbol) => () => {
    setChartSymbol({ symbol });
  };

  const coins = useAppSelector(selectCoins);

  return (
    <div className={s.switcher}>
      {coins.map(({ symbol, price, dynamics }: TCoin) => (
        <label
          key={symbol}
          htmlFor={`${name}_${symbol}`}
          className={s.switcher__option}
        >
          <input
            className={s.switcher__radio}
            type='radio'
            id={`${name}_${symbol}`}
            name={name}
            checked={selected === symbol}
            onChange={switchCoin(symbol)}
          />
          <SwitcherItem
            active={selected === symbol}
            price={price}
            symbol={symbol}
            dynamics={dynamics}
          />
        </label>
      ))}
    </div>
  );
}

export default Switcher;
