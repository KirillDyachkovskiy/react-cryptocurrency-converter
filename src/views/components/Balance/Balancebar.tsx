import { useActions, useAppSelector } from '../../hooks';
import { TSymbol } from '../../../data/types';

import { selectBalanceSymbol, selectCurrencies } from '../../../data/redux';

import { Radiobar } from '../../ui';

function Balancebar() {
  const balanceSymbol = useAppSelector(selectBalanceSymbol);
  const currencies = useAppSelector(selectCurrencies);

  const balancebarItems = currencies.map((symbol: TSymbol) => ({
    label: symbol,
    value: symbol,
  }));

  const { setBalanceSymbol } = useActions();

  const setCurrentDays = (symbol: TSymbol) => setBalanceSymbol({ symbol });

  return (
    <Radiobar<TSymbol>
      value={balanceSymbol}
      onChange={setCurrentDays}
      items={balancebarItems}
    />
  );
}

export default Balancebar;
