export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export enum DONATE_TYPE {
  FLOAT = 'float',
  EMBED = 'embed',
}

export type floatType = typeof DONATE_TYPE.FLOAT;
export type embedType = typeof DONATE_TYPE.EMBED;

export type UFOType = {
  type: floatType | embedType;
};

export type PrimaryCoinType = {
  Ethereum: string | number[];
  Goerli: string | number[];
  Polygon: string | number[];
  'Polygon Mumbai': string | number[];
};

export const PRIMARY_COIN: PrimaryCoinType = {
  Ethereum: 'ETH',
  Goerli: 'ETH',
  Polygon: 'MATIC',
  'Polygon Mumbai': 'MATIC',
};

export const DONATE_VALUE_MAP: PrimaryCoinType = {
  Ethereum: [0.001, 0.01, 0.5],
  Goerli: [0.001, 0.01, 0.5],
  Polygon: [0.5, 5, 25],
  'Polygon Mumbai': [0.5, 5, 25],
};
