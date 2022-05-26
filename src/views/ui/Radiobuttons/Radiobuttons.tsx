import { Children, isValidElement, ReactElement } from 'react';
import { IRadiobutton } from './Radiobutton';
import s from './radiobuttons.module.scss';

interface IRadiobuttons<T> {
  children: ReactElement<IRadiobutton<T>>[] | ReactElement<IRadiobutton<T>>;
  name: string;
  selected: T;
  setSelected: (value: T) => void;
}

export default function Radiobuttons<T = string>({
  children,
  name,
  selected,
  setSelected,
}: IRadiobuttons<T>) {
  return (
    <div className={s.radiobuttons}>
      {Children.map(
        children,
        (radiobutton: ReactElement<IRadiobutton<T>>, id: number) => {
          if (!isValidElement(radiobutton)) {
            return radiobutton;
          }

          const {
            props: { value, label },
          } = radiobutton;

          return (
            <label htmlFor={`${name}_${id}`} className={s.radiobutton}>
              <input
                className={s.radiobutton__radio}
                type='radio'
                id={`${name}_${id}`}
                name={name}
                checked={selected === value}
                onChange={() => setSelected(value)}
              />
              <p className={s.radiobutton__label}>{label}</p>
            </label>
          );
        }
      )}
    </div>
  );
}
