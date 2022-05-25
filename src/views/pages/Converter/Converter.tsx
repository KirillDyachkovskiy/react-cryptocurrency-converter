import { useTitle } from '../../hooks';

import s from './converter.module.scss';

function Converter() {
  useTitle('Main');

  return <h1 className={s.converter}>Converter</h1>;
}

export default Converter;
