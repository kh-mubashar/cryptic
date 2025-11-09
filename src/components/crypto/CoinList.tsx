'use client';

import { Card } from '../ui/Card';
import { CoinCard } from './CoinCard';
import { useCryptoData } from '@/context/CryptoContext';

export const CoinList = () => {
  const { coins, isLoading, error } = useCryptoData();

  if (error) {
    return (
      <Card className="w-full">
        <div className="text-red-500">Error: {error}</div>
      </Card>
    );
  }

  return (
    <Card title="Market Leaders" className="w-full">
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          coins.map((coin) => <CoinCard key={coin.id} coin={coin} />)
        )}
      </div>
    </Card>
  );
};
