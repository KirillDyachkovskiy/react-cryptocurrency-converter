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
import { useGetHistoryQuery } from '../../../data/redux/cryptoAPI';
import { TCoinIds } from '../../../data/types';
import { Preloader } from '../../ui';

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
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

interface IChart {
  id: TCoinIds;
  days: number;
}

function Chart({ id, days }: IChart) {
  const borderColor = id === 'bitcoin' ? 'rgb(201,142,29)' : 'rgb(88,56,134)';
  const backgroundColor =
    id === 'bitcoin' ? 'rgba(201,142,29,0.7)' : 'rgba(88,56,134,0.7)';

  const { data: history, isFetching } = useGetHistoryQuery({
    currency: 'usd',
    id,
    days,
  });

  if (isFetching) {
    return <Preloader />;
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
        label: id,
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

  return <Line options={options} data={line} />;
}

export default Chart;
