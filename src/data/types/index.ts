export enum TCoinId {
  btc = 'bitcoin',
  eth = 'ethereum',
}

export type TCoinSymbol = keyof typeof TCoinId;
export type TDays = 1 | 7 | 14 | 30;

export type TSymbol = TCoinSymbol | 'usd';

export type TCoin = {
  symbol: TCoinSymbol;
  price: number;
  dynamics: number;
};

export type TWalletItem = {
  symbol: TSymbol;
  value: number;
  multiplier: {
    balance: number;
    converter: number;
  };
};

export type THistoryItem = [number, number];
