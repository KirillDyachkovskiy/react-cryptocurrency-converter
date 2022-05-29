import { useTitle } from '../../hooks';

import { ContentLayout } from '../../layouts';
import { Balance, Pie } from '../../components';

import s from './wallet.module.scss';

function Wallet() {
  useTitle('Wallet');

  return (
    <ContentLayout title='Wallet'>
      <main className={s.wallet}>
        <div className={s.wallet__stats}>
          <Balance />
          <Pie />
        </div>
      </main>
    </ContentLayout>
  );
}

export default Wallet;
