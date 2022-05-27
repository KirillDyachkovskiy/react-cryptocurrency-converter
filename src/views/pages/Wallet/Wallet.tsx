import { useTitle } from '../../hooks';

import { ContentLayout } from '../../layouts';
import { Converter } from '../../components';

import s from './wallet.module.scss';

function Wallet() {
  useTitle('Wallet');

  return (
    <ContentLayout title='Wallet'>
      <main className={s.wallet}>
        <Converter />
      </main>
    </ContentLayout>
  );
}

export default Wallet;
