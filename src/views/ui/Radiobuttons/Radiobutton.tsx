export interface IRadiobutton<T> {
  label: string;
  value: T;
}

export default function Radiobutton<T = string>({ label }: IRadiobutton<T>) {
  return <div>{label}</div>;
}
