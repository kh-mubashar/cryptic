import { Card } from '../ui/Card';
import {
  formatMarketCap,
  formatPercentage,
  getColorForChange,
} from '../../utils/formatters';
import { MarketData } from '../../services/cryptoApi';

interface MarketOverviewProps {
  marketData: MarketData | null;
  isLoading: boolean;
}

export const MarketOverview = ({
  marketData,
  isLoading,
}: MarketOverviewProps) => {
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
    <Card
      title="Market Overview"
      className="grid grid-cols-1 gap-4 md:grid-cols-3"
    >
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
          className={`text-lg font-semibold ${getColorForChange(marketCapChange)}`}
        >
          {formatPercentage(marketCapChange)}
        </p>
      </div>
    </Card>
  );
};
