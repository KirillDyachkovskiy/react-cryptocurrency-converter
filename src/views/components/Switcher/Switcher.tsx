import { TCoin, TCoinIds } from '../../../data/types';
import { selectChart, selectCurrencies } from '../../../data/redux';

import { useActions, useAppSelector } from '../../hooks';

import { Currency } from '../../ui';

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

  const currencies = useAppSelector(selectCurrencies);

  return (
    <div className={s.switcher}>
      {currencies.map(({ id, symbol, price, dynamics }: TCoin) => (
        <label
          key={id}
          htmlFor={`${name}_${id}`}
          className={s.switcher__option}
        >
          <input
            className={s.switcher__radio}
            type='radio'
            id={`${name}_${id}`}
            name={name}
            checked={selectedId === id}
            onChange={switchCoin(id)}
          />
          <Currency
            active={selectedId === id}
            id={id}
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
