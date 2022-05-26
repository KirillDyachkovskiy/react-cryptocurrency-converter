import { ChangeEvent, useState } from 'react';
import { TTab } from '../../../data/types';

import { Currency } from '../../ui';

import s from './switcher.module.scss';

const currencies: TTab[] = [
  {
    id: 1,
    symbol: 'btc',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    value: 29754,
    dynamics: 0.9813,
  },
  {
    id: 2,
    symbol: 'etnh',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    value: 238432,
    dynamics: 1.9813,
  },
];

interface ISwitcher {
  name: string;
  onChange: (selected: string) => void;
}

function Switcher({ name, onChange }: ISwitcher) {
  const [selected, setSelected] = useState<string>('btc');

  const select = (hovered: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setSelected(hovered);
    e.currentTarget.blur();
    onChange(hovered);
  };

  return (
    <div className={s.switcher}>
      {currencies.map(({ id, symbol, image, value, dynamics }: TTab) => (
        <label htmlFor={`${name}_${id}`} className={s.switcher__option}>
          <input
            className={s.switcher__radio}
            type='radio'
            id={`${name}_${id}`}
            name={name}
            checked={selected === symbol}
            onChange={select(symbol)}
          />
          <Currency
            active={selected === symbol}
            image={image}
            value={value}
            symbol={symbol}
            dynamics={dynamics}
          />
        </label>
      ))}
    </div>
  );
}

export default Switcher;
