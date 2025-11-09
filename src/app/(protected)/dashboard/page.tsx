import { CoinList } from '@/components/crypto/CoinList';
import { MarketOverview } from '@/components/crypto/MarketOverview/MarketOverview';

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <MarketOverview />
      <CoinList />
    </div>
  );
}
