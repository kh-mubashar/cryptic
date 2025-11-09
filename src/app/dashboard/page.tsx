import { CoinList } from '@/components/crypto/CoinList';
import { MarketOverview } from '@/components/crypto/MarketOverview/MarketOverview';

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <MarketOverview />
      <CoinList />
    </div>
  );
}
