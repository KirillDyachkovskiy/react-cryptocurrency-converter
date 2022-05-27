import { ChangeEvent, useState } from 'react';
import { TWallet } from '../../../data/types';

import { Icon, Input } from '../../ui';

import s from './field.module.scss';

interface IField {
  id: TWallet;
  initialValue: number;
}

function Field({ id, initialValue }: IField) {
  const [value, setValue] = useState<string>(String(initialValue));

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numbersOnly = e.target.value.replace(/\D/g, '');

    setValue(numbersOnly);
  };

  return (
    <div className={s.field}>
      <Icon name={id} className={s.field__icon} />
      <Input id={id} value={value} onChange={onChange} placeholder='0' />
    </div>
  );
}

export default Field;
