const API_BASE_URL = '/api/crypto';

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  last_updated: string;
}

export interface MarketData {
  total_market_cap: { [key: string]: number };
  total_volume: { [key: string]: number };
  market_cap_percentage: { [key: string]: number };
  market_cap_change_percentage_24h_usd: number;
}

interface CombinedData {
  global: {
    data: MarketData;
  };
  coins: Coin[];
  timestamp: number;
}

export const fetchCombinedData = async (): Promise<CombinedData> => {
  const response = await fetch(`${API_BASE_URL}?endpoint=combined`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  if (data.error) {
    throw new Error(data.error);
  }

  return data;
};

export const fetchCoinHistory = async (coinId: string, days: number = 7) => {
  const response = await fetch(
    `${API_BASE_URL}?endpoint=coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch coin history');
  }

  return response.json();
};
