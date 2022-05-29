import { Chart as ChartJS, registerables } from 'chart.js';
import { Pie as PieChart } from 'react-chartjs-2';

import { EBorderColors, EColors, TWalletItem } from '../../../data/types';

import { useAppSelector } from '../../hooks';
import { selectBalance } from '../../../data/redux';

import s from './pie.module.scss';

ChartJS.register(...registerables);

function Pie() {
  const { accounts } = useAppSelector(selectBalance);

  const labels = accounts.map((walletItem: TWalletItem) => walletItem.symbol);
  const data = accounts.map(
    (walletItem: TWalletItem) => walletItem.price * walletItem.count
  );
  const backgroundColor = accounts.map(
    ({ symbol }: TWalletItem) => EColors[symbol]
  );
  const borderColor = accounts.map(
    ({ symbol }: TWalletItem) => EBorderColors[symbol]
  );

  const pie = {
    labels,
    datasets: [
      {
        backgroundColor,
        borderColor,
        data,
      },
    ],
  };

  return (
    <div className={s.pie}>
      <PieChart data={pie} />
    </div>
  );
}

export default Pie;
