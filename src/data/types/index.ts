export enum TCoinId {
  btc = 'bitcoin',
  eth = 'ethereum',
}

export type TCoinSymbol = keyof typeof TCoinId;
export type TDays = 1 | 7 | 14 | 30;

export type TSymbol = TCoinSymbol | 'usd';

export type TBalance = {
  symbol: TSymbol;
  price: number;
};

export type TConverter = {
  symbol: TSymbol;
  price: number;
  value: number;
};

export type TWalletItem = {
  symbol: TSymbol;
  value: number;
  price: number;
  dynamics: number;
};
