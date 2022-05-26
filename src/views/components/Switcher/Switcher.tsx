import { Dispatch, SetStateAction } from 'react';
import { TCoin, TCoinIds } from '../../../data/types';
import { selectCurrency } from '../../../data/redux';

import { useAppSelector } from '../../hooks';

import { Currency } from '../../ui';

import s from './switcher.module.scss';

interface ISwitcher {
  name: string;
  selected: TCoinIds;
  setSelected: Dispatch<SetStateAction<TCoinIds>>;
}

function Switcher({ name, selected, setSelected }: ISwitcher) {
  const select = (hovered: TCoinIds) => () => {
    setSelected(hovered);
  };

  const currencies = useAppSelector(selectCurrency);

  return (
    <div className={s.switcher}>
      {currencies.map(({ id, symbol, image, price, dynamics }: TCoin) => (
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
            checked={selected === id}
            onChange={select(id)}
          />
          <Currency
            active={selected === id}
            image={image}
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
