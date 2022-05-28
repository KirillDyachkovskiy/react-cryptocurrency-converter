import { Dispatch, SetStateAction } from 'react';
import { TSymbol } from '../../../data/types';

import { useAppSelector } from '../../hooks';

import { selectCurrencies } from '../../../data/redux';

import { Dropdown, Radiobutton, Radiobuttons, Symbol } from '../../ui';

import s from './symbolList.module.scss';

interface IStatusList {
  name: string;
  selected: TSymbol;
  setSelected: (value: TSymbol) => void;
}

function SymbolList({ name, selected, setSelected }: IStatusList) {
  const currencies = useAppSelector(selectCurrencies);

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
            {currencies.map((symbol: TSymbol) => (
              <Radiobutton key={symbol} value={symbol}>
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
