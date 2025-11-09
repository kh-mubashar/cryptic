import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import {
  formatCurrency,
  formatPercentage,
  getColorForChange,
} from '@/utils/formatters';
import { Coin } from '@/services/cryptoApi';

interface CoinCardProps {
  coin: Coin;
}

export const CoinCard = ({ coin }: CoinCardProps) => {
  return (
    <Card className="w-full">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <Image
            src={coin.image}
            alt={coin.name}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {coin.name} ({coin.symbol.toUpperCase()})
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">
              {formatCurrency(coin.current_price)}
            </span>
            <span
              className={`${getColorForChange(
                coin.price_change_percentage_24h
              )} text-sm`}
            >
              {formatPercentage(coin.price_change_percentage_24h)}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};
