import { ReactElement } from 'react';

export type TCurrency = 'usd';
export type TCoinIds = 'bitcoin' | 'ethereum';

export type TCoin = {
  id: TCoinIds;
  symbol: string;
  image: string;
  price: number;
  dynamics: number;
};

export type THistoryItem = [number, number];

export type TSidebarItem = {
  path: string;
  label: string;
  icon: ReactElement;
};
