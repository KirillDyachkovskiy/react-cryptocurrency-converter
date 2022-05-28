import { TDays } from '../../../data/types';
import { selectChart } from '../../../data/redux';

import { useActions, useAppSelector } from '../../hooks';

import { Radiobutton, Radiobuttons } from '../../ui';

import s from './daysbar.module.scss';

const daysArray = [
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
    <div className={s.daysbar}>
      <Radiobuttons<TDays>
        name='currencyDays'
        selected={currentDays}
        setSelected={setCurrentDays}
      >
        {daysArray.map(({ value, label }) => (
          <Radiobutton key={label} value={value}>
            <p
              className={`${s.daysbar__item} ${
                currentDays === value ? s.daysbar__item_active : ''
              }`}
            >
              {label}
            </p>
          </Radiobutton>
        ))}
      </Radiobuttons>
    </div>
  );
}

export default Daysbar;
