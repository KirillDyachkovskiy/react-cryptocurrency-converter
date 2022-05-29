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
  const converter = useAppSelector(selectConverter);
  const wallet = useAppSelector(selectWallet);
  const { setFromSymbol, setFromValue } = useActions();

  const onSelect = (symbol: TSymbol) => setFromSymbol({ symbol });
  const onChange = (value: number) => setFromValue({ value });

  const convertTo = wallet.filter(
    ({ symbol }: TWalletItem) => symbol !== converter.symbol
  );

  return (
    <section className={s.converter}>
      <ConverterItem
        type='from'
        {...converter}
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
      {convertTo.map(({ symbol, multiplier }: TWalletItem) => (
        <ConverterItem
          key={symbol}
          symbol={symbol}
          type='to'
          value={converter.value * multiplier.converter}
        />
      ))}
    </section>
  );
}

export default Converter;
