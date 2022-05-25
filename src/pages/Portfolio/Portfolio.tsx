import { useTitle } from '../../hooks';

import s from './portfolio.module.scss';

function Portfolio() {
  useTitle('Portfolio');

  return <h1 className={s.portfolio}>Portfolio</h1>;
}

export default Portfolio;
