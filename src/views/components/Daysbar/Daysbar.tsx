import { TDays } from '../../../data/types';
import { selectChart } from '../../../data/redux';

import { useActions, useAppSelector } from '../../hooks';

import { Radiobutton, Radiobuttons } from '../../ui';

function Daysbar() {
  const { days: currentDays } = useAppSelector(selectChart);

  const { setDays } = useActions();

  const switchDays = (days: TDays) => setDays({ days });

  return (
    <Radiobuttons<TDays>
      name='currencyDays'
      selected={currentDays}
      setSelected={switchDays}
    >
      <Radiobutton label='1 day' value={1} />
      <Radiobutton label='1 week' value={7} />
      <Radiobutton label='14 days' value={14} />
      <Radiobutton label='1 month' value={30} />
    </Radiobuttons>
  );
}

export default Daysbar;
