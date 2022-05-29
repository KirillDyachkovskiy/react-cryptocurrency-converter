import { useActions, useAppSelector } from '../../hooks';
import { TDays } from '../../../data/types';

import { selectChart } from '../../../data/redux';

import { Radiobar } from '../../ui';

const daysArray: {
  value: TDays;
  label: string;
}[] = [
  {
    value: 1,
    label: '1 day',
  },
  {
    value: 7,
    label: '1 week',
  },
  {
    value: 14,
    label: '14 days',
  },
  {
    value: 30,
    label: '1 month',
  },
];

function Daysbar() {
  const { days: currentDays } = useAppSelector(selectChart);

  const { setChartDays } = useActions();

  const setCurrentDays = (days: TDays) => setChartDays({ days });

  return (
    <Radiobar<TDays>
      value={currentDays}
      onChange={setCurrentDays}
      items={daysArray}
    />
  );
}

export default Daysbar;
