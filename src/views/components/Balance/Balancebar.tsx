import { useActions, useAppSelector } from '../../hooks';
import { TSymbol } from '../../../data/types';

import { selectBalance, selectCurrencies } from '../../../data/redux';

import { Radiobar } from '../../ui';

function Balancebar() {
  const { symbol: currentSymbol } = useAppSelector(selectBalance);
  const currencies = useAppSelector(selectCurrencies);

  const balancebarItems = currencies.map((symbol: TSymbol) => ({
    label: symbol,
    value: symbol,
  }));

  const { setBalanceSymbol } = useActions();

  const setCurrentSymbol = (symbol: TSymbol) => setBalanceSymbol({ symbol });

  return (
    <Radiobar<TSymbol>
      value={currentSymbol}
      onChange={setCurrentSymbol}
      items={balancebarItems}
    />
  );
}

export default Balancebar;
