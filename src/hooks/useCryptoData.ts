'use client';

import { useState, useEffect, useCallback } from 'react';
import { Coin, MarketData, fetchCombinedData } from '../services/cryptoApi';

export const useCryptoData = (limit?: number) => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [marketData, setMarketData] = useState<MarketData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastFetch, setLastFetch] = useState(0);

  const fetchData = useCallback(async () => {
    // Prevent fetching more often than every 30 seconds
    const now = Date.now();
    if (now - lastFetch < 30000 && coins.length > 0) {
      return;
    }

    try {
      setIsLoading(true);
      const data = await fetchCombinedData();

      setCoins(limit ? data.coins.slice(0, limit) : data.coins);
      setMarketData(data.global.data);
      setError(null);
      setLastFetch(now);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [coins.length, lastFetch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    coins,
    marketData,
    isLoading,
    error,
    refreshData: fetchData,
  };
};
