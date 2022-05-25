import { useTitle } from '../../hooks';

import s from './wallet.module.scss';

function Wallet() {
  useTitle('Wallet');

  return <h1 className={s.wallet}>Wallet</h1>;
}

export default Wallet;
