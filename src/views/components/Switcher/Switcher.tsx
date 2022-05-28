import { TCoin, TCoinIds } from '../../../data/types';
import { selectChart, selectCurrencies } from '../../../data/redux';

import { useActions, useAppSelector } from '../../hooks';

import SwitcherItem from './SwitcherItem';

import s from './switcher.module.scss';

interface ISwitcher {
  name: string;
}

function Switcher({ name }: ISwitcher) {
  const { id: selectedId } = useAppSelector(selectChart);

  const { setCoin } = useActions();

  const switchCoin = (id: TCoinIds) => () => {
    setCoin({ id });
  };

  const { coins } = useAppSelector(selectCurrencies);

  return (
    <div className={s.switcher}>
      {coins.map(({ id, symbol, price, dynamics }: TCoin) => (
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
            checked={selectedId === id}
            onChange={switchCoin(id)}
          />
          <SwitcherItem
            active={selectedId === id}
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
