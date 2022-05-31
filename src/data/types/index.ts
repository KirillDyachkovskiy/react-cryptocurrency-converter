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
  count: number;
  price: number;
  dynamics: number;
};

export type TBalanceItem = TWalletItem & { balance: number };

export enum EColors {
  btc = 'rgba(234,119,54,0.7)',
  eth = 'rgba(98,70,136,0.7)',
  usd = 'rgba(54,164,80,0.7)',
}

export enum EBorderColors {
  btc = 'rgba(234,119,54,1)',
  eth = 'rgba(98,70,136,1)',
  usd = 'rgba(54,164,80,1)',
}
