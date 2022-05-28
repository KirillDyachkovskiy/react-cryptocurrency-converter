import { selectConvert } from '../../../data/redux';
import { TSymbol } from '../../../data/types';

import { useActions, useAppSelector } from '../../hooks';

import SymbolList from '../SymbolList';
import { Button, Icon } from '../../ui';

import s from './converter.module.scss';

interface IBillet {
  type: 'from' | 'to';
  id: TSymbol;
  value: number;
  onSelect: (id: TSymbol) => void;
}

function Billet({ type, id, value, onSelect }: IBillet) {
  return (
    <article className={s.billet}>
      <div>
        <p className={s.billet__type}>{type}</p>
        <SymbolList
          name='billetSymbolList'
          selected={id}
          setSelected={onSelect}
        />
      </div>
      <p className={s.billet__value}>{value}</p>
    </article>
  );
}

function Converter() {
  const availableSymbols: TSymbol[] = ['usd', 'btc', 'eth'];

  const { from, to } = useAppSelector(selectConvert);
  const { setFrom } = useActions();
  const { setTo, addTo } = useActions();

  const onFromSelect = (id: TSymbol) => setFrom({ id, value: 28 });

  const onToSelect = (index: number) => (id: TSymbol) => {
    setTo({ id, index, multiplier: 28 });
  };

  const available = availableSymbols.find(
    (id: TSymbol) => ![...to, from].map((item) => item.id).includes(id)
  );

  const addToBillet = () => {
    if (available) {
      addTo({ id: available, multiplier: 28 });
    }
  };

  return (
    <section className={s.converter}>
      <Billet type='from' {...from} onSelect={onFromSelect} />
      <Icon name='bigChevron' className={s.converter__chevron} />
      {to.map(({ id, multiplier }, index) => (
        <Billet
          key={id}
          id={id}
          type='to'
          value={from.value * multiplier}
          onSelect={onToSelect(index)}
        />
      ))}
      {to.length < 2 && (
        <Button onClick={addToBillet}>Add another currency</Button>
      )}
    </section>
  );
}

export default Converter;
