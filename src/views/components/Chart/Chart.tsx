import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';

import { EBorderColors, EColors, TCoinId } from '../../../data/types';

import { useGetHistoryQuery } from '../../../data/redux/cryptoAPI';
import { useAppSelector } from '../../hooks';

import { selectChart } from '../../../data/redux';

import { Preloader } from '../../ui';

import s from './chart.module.scss';

ChartJS.register(...registerables);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

function Chart() {
  const { days, symbol } = useAppSelector(selectChart);

  const {
    data: history,
    isFetching,
    isSuccess,
  } = useGetHistoryQuery({
    id: TCoinId[symbol],
    days,
  });

  if (isFetching) {
    return (
      <div className={s.chart}>
        <Preloader />
      </div>
    );
  }

  if (!isSuccess) {
    return null;
  }

  const labels = history.map((coin) => {
    const date = new Date(coin[0]);

    return date.toLocaleDateString('en-US', {
      hour: 'numeric',
      day: 'numeric',
      month: 'long',
    });
  });
  const data = history.map((mark) => mark[1]);
  const backgroundColor = EColors[symbol];
  const borderColor = EBorderColors[symbol];

  const line = {
    labels,
    datasets: [
      {
        label: symbol,
        data,
        fill: true,
        backgroundColor,
        borderColor,
        pointRadius: 0,
        lineTension: 1,
        radius: 100,
      },
    ],
  };

  return (
    <div className={s.chart}>
      <Line options={options} data={line} />
    </div>
  );
}

export default Chart;
