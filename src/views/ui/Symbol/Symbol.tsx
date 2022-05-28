import { TSymbol } from '../../../data/types';

import s from './symbol.module.scss';

interface IStatus {
  value: TSymbol;
  active?: boolean;
}

function Symbol({ value, active = false }: IStatus) {
  return (
    <p className={`${s.symbol} ${active ? s.symbol_active : ''}`}>{value}</p>
  );
}

export default Symbol;
