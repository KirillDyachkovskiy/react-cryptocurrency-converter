import { useState } from 'react';
import { TSymbol } from '../../../data/types';

import { useActions } from '../../hooks';

import { Button, Input, Popup } from '../../ui';

import s from './currencyBlock.module.scss';

interface ICurrencyMenu {
  active: boolean;
  hidePopup: () => void;
  symbol: TSymbol;
  count: number;
}

function CurrencyMenu({ active, hidePopup, symbol, count }: ICurrencyMenu) {
  const [delta, setDelta] = useState<string>('100');

  const { setAccountValue } = useActions();

  const buy = () => {
    setAccountValue({ symbol, count: count + +delta });
    setDelta('100');
    hidePopup();
  };

  const sell = () => {
    setAccountValue({ symbol, count: count - +delta });
    setDelta('100');
    hidePopup();
  };

  return (
    <Popup active={active} onClose={hidePopup}>
      <form className={s.currencyMenu}>
        <Input id='sell' value={delta} onChange={setDelta} onlyNumbers />
        <div className={s.currencyMenu__action}>
          <Button onClick={buy}>Buy</Button>
          <Button onClick={sell}>Sell</Button>
        </div>
      </form>
    </Popup>
  );
}

export default CurrencyMenu;
