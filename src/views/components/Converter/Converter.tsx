import { selectCurrencies } from '../../../data/redux';
import { TSymbol } from '../../../data/types';

import { useActions, useAppSelector } from '../../hooks';

import { Icon } from '../../ui';

import s from './converter.module.scss';
import ConverterItem from './ConverterItem';

interface IConverter {
  isFetching: boolean;
  refetch: () => void;
}

function Converter({ isFetching, refetch }: IConverter) {
  const { from, to } = useAppSelector(selectCurrencies);
  const { setFromSymbol, setFromValue } = useActions();

  const onSelect = (symbol: TSymbol) => setFromSymbol({ symbol });
  const onChange = (value: number) => setFromValue({ value });

  return (
    <section className={s.converter}>
      <ConverterItem
        type='from'
        {...from}
        onSelect={onSelect}
        onChange={onChange}
      />
      {isFetching ? (
        <Icon
          name='reload'
          className={`${s.converter__icon} ${s.converter__icon_reload}`}
        />
      ) : (
        <Icon
          name='bigChevron'
          className={s.converter__icon}
          onClick={refetch}
        />
      )}
      {to.map(({ symbol, multiplier }) => (
        <ConverterItem
          key={symbol}
          symbol={symbol}
          type='to'
          value={from.value * multiplier}
        />
      ))}
    </section>
  );
}

export default Converter;
