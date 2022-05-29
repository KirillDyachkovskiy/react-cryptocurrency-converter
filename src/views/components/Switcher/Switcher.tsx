import { TCoinSymbol, TWalletItem } from '../../../data/types';
import { selectChart, selectWallet } from '../../../data/redux';

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

  const wallet = useAppSelector(selectWallet);

  const onlyCoins = wallet.filter(
    ({ symbol }: TWalletItem) => symbol !== 'usd'
  );

  return (
    <div className={s.switcher}>
      {onlyCoins.map(({ symbol, price, dynamics }: TWalletItem) => (
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
            onChange={switchCoin(symbol as TCoinSymbol)}
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
