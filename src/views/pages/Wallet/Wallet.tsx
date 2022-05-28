import { useTitle } from '../../hooks';

import { ContentLayout } from '../../layouts';
import { Balance } from '../../components';

import s from './wallet.module.scss';

function Wallet() {
  useTitle('Wallet');

  return (
    <ContentLayout title='Wallet'>
      <main className={s.wallet}>
        <Balance />
      </main>
    </ContentLayout>
  );
}

export default Wallet;
