export type TCurrency = 'usd';
export type TCoinIds = 'bitcoin' | 'ethereum';
export type TWallet = TCurrency | TCoinIds;
export type TSymbol = 'usd' | 'btc' | 'eth';

export type TDays = 1 | 7 | 14 | 30;

export type TCoin = {
  id: TCoinIds;
  symbol: string;
  price: number;
  dynamics: number;
};

export type THistoryItem = [number, number];
