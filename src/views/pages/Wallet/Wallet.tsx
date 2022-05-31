import { useTitle } from '../../hooks';

import { ContentLayout } from '../../layouts';
import { Balance, Pie } from '../../components';

import s from './wallet.module.scss';
import CurrencyBlock from '../../components/CurrencyBlock';

function Wallet() {
  useTitle('Wallet');

  return (
    <ContentLayout title='Wallet'>
      <main className={s.wallet}>
        <div className={s.wallet__card}>
          <Balance />
          <CurrencyBlock />
        </div>
        <div className={s.wallet__chart}>
          <Pie />
        </div>
      </main>
    </ContentLayout>
  );
}

export default Wallet;
