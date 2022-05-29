import { TCoinId, TCoinSymbol } from './index';

export type TCoinDataReq = { id: TCoinId };
export type TCoinDataRes = {
  symbol: TCoinSymbol;
  price: number;
  dynamics: number;
};

export type TCoinHistoryReq = { id: TCoinId; days: number };
export type TCoinHistoryRes = [number, number][];
