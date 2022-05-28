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
  const onChange = (value: T) => () => setSelected(value);

  return (
    <>
      {Children.map(
        children,
        (radiobutton: ReactElement<IRadiobutton<T>>, id: number) => {
          if (!isValidElement(radiobutton)) {
            return radiobutton;
          }

          const {
            props: { value, children: content },
          } = radiobutton;

          return (
            <label htmlFor={`${name}_${id}`}>
              <input
                className={s.radiobutton}
                type='radio'
                id={`${name}_${id}`}
                name={name}
                checked={selected === value}
                onChange={onChange(value)}
              />
              {content}
            </label>
          );
        }
      )}
    </>
  );
}
