import { selectConvert } from '../../../data/redux';
import { TSymbols } from '../../../data/types';

import { useAppSelector } from '../../hooks';

import { Button, Icon } from '../../ui';

import s from './converter.module.scss';

interface IConverterItem {
  type: 'from' | 'to';
  id: TSymbols;
  value: number;
}

function ConverterItem({ type, id, value }: IConverterItem) {
  return (
    <article className={s.converterItem}>
      <div>
        <p className={s.converterItem__type}>{type}</p>
        <p className={s.converterItem__from}>{id}</p>
      </div>
      <p className={s.converterItem__value}>{value}</p>
    </article>
  );
}

function Converter() {
  const { from, to } = useAppSelector(selectConvert);

  return (
    <section className={s.converter}>
      <ConverterItem type='from' {...from} />
      <Icon name='bigChevron' className={s.converter__chevron} />
      {to.map(({ id, multiplier }) => (
        <ConverterItem
          key={id}
          id={id}
          type='to'
          value={from.value * multiplier}
        />
      ))}
      {to.length !== 2 && <Button>Add another currency</Button>}
    </section>
  );
}

export default Converter;
