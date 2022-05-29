import { selectConverter, selectWallet } from '../../../data/redux';
import { TSymbol, TWalletItem } from '../../../data/types';

import { useActions, useAppSelector } from '../../hooks';

import ConverterItem from './ConverterItem';
import { Icon } from '../../ui';

import s from './converter.module.scss';

interface IConverter {
  isFetching: boolean;
  refetch: () => void;
}

function Converter({ isFetching, refetch }: IConverter) {
  const {
    symbol: fromSymbol,
    price: fromPrice,
    value: fromValue,
  } = useAppSelector(selectConverter);
  const wallet = useAppSelector(selectWallet);
  const { setConverterSymbol, setConverterValue } = useActions();

  const onSelect = (symbol: TSymbol) => setConverterSymbol({ symbol });
  const onChange = (value: number) => setConverterValue({ value });

  const convertTo = wallet.filter(
    ({ symbol }: TWalletItem) => symbol !== fromSymbol
  );

  return (
    <section className={s.converter}>
      <ConverterItem
        type='from'
        symbol={fromSymbol}
        value={fromValue}
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
      {convertTo.map(({ symbol, price: toPrice }: TWalletItem) => (
        <ConverterItem
          key={symbol}
          symbol={symbol}
          type='to'
          value={(fromValue * fromPrice) / toPrice}
        />
      ))}
    </section>
  );
}

export default Converter;
