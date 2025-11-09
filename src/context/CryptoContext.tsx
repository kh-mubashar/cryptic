'use client';

import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { Coin, MarketData, fetchCombinedData } from '@/services/cryptoApi';
import { useRefreshStore } from '@/store/refreshStore';

interface CryptoContextType {
  coins: Coin[];
  marketData: MarketData | null;
  isLoading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

const CryptoContext = createContext<CryptoContextType | null>(null);

export function CryptoProvider({ children }: { children: ReactNode }) {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [marketData, setMarketData] = useState<MarketData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await fetchCombinedData();
      setCoins(data.coins);
      setMarketData(data.global.data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      // Keep existing data on error
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial fetch on mount
  useEffect(() => {
    if (coins.length === 0) {
      fetchData();
    }
  }, [fetchData, coins.length]);

  // Handle auto-refresh
  useEffect(() => {
    const store = useRefreshStore.getState();
    
    // Only set up interval if auto-refresh is enabled
    if (store.isAutoRefreshEnabled) {
      const interval = setInterval(() => {
        if (document.visibilityState === 'visible') {
          fetchData();
        }
      }, 30000);

      // Cleanup interval on disable
      return () => clearInterval(interval);
    }
  }, [fetchData]);

  // Subscribe to auto-refresh toggle changes
  useEffect(() => {
    const unsubscribe = useRefreshStore.subscribe((state) => {
      if (state.isAutoRefreshEnabled) {
        fetchData(); // Fetch immediately when enabled
      }
    });

    return () => unsubscribe();
  }, [fetchData]);

  return (
    <CryptoContext.Provider
      value={{
        coins,
        marketData,
        isLoading,
        error,
        refreshData: fetchData,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
}

export function useCryptoData() {
  const context = useContext(CryptoContext);
  if (!context) {
    throw new Error('useCryptoData must be used within a CryptoProvider');
  }
  return context;
}
