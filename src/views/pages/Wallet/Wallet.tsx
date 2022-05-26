import { useTitle } from '../../hooks';

import { ContentLayout } from '../../layouts';

import s from './wallet.module.scss';

function Wallet() {
  useTitle('Wallet');

  return (
    <ContentLayout title='Wallet'>
      <main className={s.dashboard}>Lol</main>
    </ContentLayout>
  );
}

export default Wallet;
