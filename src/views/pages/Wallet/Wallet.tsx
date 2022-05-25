// import { useGetCoinDataQuery } from '../../../data/redux/cryptoAPI';
import { useTitle } from '../../hooks';

import s from './wallet.module.scss';

function Wallet() {
  useTitle('Wallet');
  //
  // const request = { vs_currency: 'usd', ids: 'bitcoin' };
  //
  // const { data, isFetching } = useGetCoinDataQuery(request);
  //
  // console.log(data);
  // console.log(isFetching);

  return <h1 className={s.wallet}>Wallet</h1>;
}

export default Wallet;
