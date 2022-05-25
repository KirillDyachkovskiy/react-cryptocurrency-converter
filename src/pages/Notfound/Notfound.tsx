import { useTitle } from '../../hooks';

import s from './notfound.module.scss';

function Notfound() {
  useTitle('Page not found!');

  return <h1 className={s.notfound}>Notfound</h1>;
}

export default Notfound;
