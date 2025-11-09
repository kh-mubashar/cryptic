'use client';

import { Card } from '@/components/ui/Card';
import { CoinCard } from '@/components/crypto/CoinCard';
import { useCryptoData } from '@/hooks/useCryptoData';

export const CoinList = () => {
  const { coins, isLoading, error } = useCryptoData(10);

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
