 'use client'

import { Card } from '@/components/ui/Card';
import {
  formatMarketCap,
  formatPercentage,
  getColorForChange,
} from '../../../utils/formatters';
import { useCryptoData } from '@/context/CryptoContext';
import { AutoRefreshToggle } from '../AutoRefreshToggle';

export const MarketOverview = () => {
  const { marketData, isLoading } = useCryptoData();
  if (isLoading) {
    return <Card title="Market Overview">Loading...</Card>;
  }

  if (!marketData) {
    return <Card title="Market Overview">No data available</Card>;
  }

  const totalMarketCap = marketData.total_market_cap.usd;
  const totalVolume = marketData.total_volume.usd;
  const marketCapChange = marketData.market_cap_change_percentage_24h_usd;

  return (
    <Card title="Market Overview">
      <div className="mb-4 flex justify-end">
        <AutoRefreshToggle />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h4 className="text-sm text-gray-500">Total Market Cap</h4>
          <p className="text-lg font-semibold">
            {formatMarketCap(totalMarketCap)}
          </p>
        </div>
        <div>
          <h4 className="text-sm text-gray-500">24h Volume</h4>
          <p className="text-lg font-semibold">{formatMarketCap(totalVolume)}</p>
        </div>
        <div>
          <h4 className="text-sm text-gray-500">24h Change</h4>
          <p
            className={`text-lg font-semibold ${getColorForChange(
              marketCapChange
            )}`}
          >
            {formatPercentage(marketCapChange)}
          </p>
        </div>
      </div>
    </Card>
  );
};
