import { TSymbol } from '../../../data/types';

import SymbolList from '../SymbolList';
import { Input, Symbol } from '../../ui';

import s from './converter.module.scss';

interface IConverterItem {
  type: 'from' | 'to';
  symbol: TSymbol;
  value: number;
  onSelect?: (id: TSymbol) => void;
  onChange?: (value: number) => void;
}

function ConverterItem({
  type,
  symbol,
  value,
  onSelect,
  onChange,
}: IConverterItem) {
  const handleChange = (stringValue: string) => {
    const number = parseInt(stringValue, 10) || 0;

    if (onChange) {
      onChange(number);
    }
  };

  return (
    <article className={s.converterItem}>
      <div>
        <p className={s.converterItem__type}>{type}</p>
        {onSelect ? (
          <SymbolList
            name='fromSymbol'
            selected={symbol}
            setSelected={onSelect}
          />
        ) : (
          <Symbol value={symbol} />
        )}
      </div>
      {onChange ? (
        <Input
          id='fromValue'
          onChange={handleChange}
          placeholder='from value'
        />
      ) : (
        <p className={s.converterItem__value}>{value}</p>
      )}
    </article>
  );
}

export default ConverterItem;
