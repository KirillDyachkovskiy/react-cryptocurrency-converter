import { selectWallet } from '../../../data/redux';

import { useAppSelector } from '../../hooks';

import Field from '../Field';

import s from './converter.module.scss';

function Converter() {
  const wallet = useAppSelector(selectWallet);
  // const [bitcoin, ethereum] = useAppSelector(selectCurrencies);

  // const { setValue } = useActions();

  return (
    <section className={s.converter}>
      {wallet.map(({ id }) => (
        <Field id={id} initialValue={0} />
      ))}
    </section>
  );
}

export default Converter;
