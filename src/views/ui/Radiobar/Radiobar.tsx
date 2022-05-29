import { Radiobutton, Radiobuttons } from '../Radiobuttons';

import s from './radiobar.module.scss';

type RadiobarItem<T> = {
  value: T;
  label: string;
};

interface IRadiobar<T> {
  items: RadiobarItem<T>[];
  value: T;
  onChange: (value: T) => void;
}

function Radiobar<T = string>({ items, value, onChange }: IRadiobar<T>) {
  return (
    <div className={s.daysbar}>
      <Radiobuttons<T>
        name='currencyDays'
        selected={value}
        setSelected={onChange}
      >
        {items.map(({ value: itemValue, label }) => (
          <Radiobutton key={label} value={itemValue}>
            <p
              className={`${s.daysbar__item} ${
                value === itemValue ? s.daysbar__item_active : ''
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

export default Radiobar;
