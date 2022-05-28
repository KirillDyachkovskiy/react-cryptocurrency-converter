import { Dispatch, SetStateAction } from 'react';
import { TSymbol } from '../../../data/types';

import { Dropdown, Radiobutton, Radiobuttons, Symbol } from '../../ui';

import s from './symbolList.module.scss';

interface IStatusList {
  name: string;
  selected: TSymbol;
  setSelected: (value: TSymbol) => void;
}

function SymbolList({ name, selected, setSelected }: IStatusList) {
  const availableSymbols: TSymbol[] = ['usd', 'btc', 'eth'];

  const onChange =
    (isDropdownVisible: Dispatch<SetStateAction<false>>) =>
    (value: TSymbol) => {
      setSelected(value);
      isDropdownVisible(false);
    };

  return (
    <Dropdown element={<Symbol value={selected} />}>
      {(isDropdownVisible: Dispatch<SetStateAction<false>>) => (
        <div className={s.symbolList}>
          <Radiobuttons<TSymbol>
            name={name}
            selected={selected}
            setSelected={onChange(isDropdownVisible)}
          >
            {availableSymbols.map((symbol: TSymbol) => (
              <Radiobutton value={symbol}>
                <Symbol value={symbol} active={selected === symbol} />
              </Radiobutton>
            ))}
          </Radiobuttons>
        </div>
      )}
    </Dropdown>
  );
}

export default SymbolList;
