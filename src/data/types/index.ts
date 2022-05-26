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
