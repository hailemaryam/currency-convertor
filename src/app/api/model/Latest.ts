export interface Rates {
  AUD: number;
  CAD: number;
  CHF: number;
  CNY: number;
  GBP: number;
  JPY: number;
  USD: number;
}

export interface Latest {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Rates;
}
