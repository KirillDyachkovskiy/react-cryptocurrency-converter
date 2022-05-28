import { ReactNode } from 'react';

export interface IRadiobutton<T> {
  children: ReactNode;
  value: T;
}

function Radiobutton<T = string>({ children }: IRadiobutton<T>) {
  return <div>{children}</div>;
}

export default Radiobutton;
