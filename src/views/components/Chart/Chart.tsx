import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { TCoinId } from '../../../data/types';

import { useGetHistoryQuery } from '../../../data/redux/cryptoAPI';
import { useAppSelector } from '../../hooks';

import { selectChart } from '../../../data/redux';

import { Preloader } from '../../ui';

import s from './chart.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

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

  const borderColor = symbol === 'btc' ? 'rgb(234,119,54)' : 'rgb(98,70,136)';
  const backgroundColor =
    symbol === 'btc' ? 'rgba(234,119,54,0.7)' : 'rgba(98,70,136,0.7)';

  const { data: history, isFetching } = useGetHistoryQuery({
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

  const labels = history?.map((coin) => {
    const date = new Date(coin[0]);

    return date.toLocaleDateString('en-US', {
      hour: 'numeric',
      day: 'numeric',
      month: 'long',
    });
  });
  const data = history?.map((mark) => mark[1]);

  const line = {
    labels,
    datasets: [
      {
        label: symbol,
        data,
        fill: true,
        borderColor,
        backgroundColor,
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
