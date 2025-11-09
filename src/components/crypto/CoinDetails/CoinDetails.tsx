'use client';

import React, { useMemo } from 'react';
import { gql, useQuery } from '@apollo/client';
import { CoinChart } from '@/components/crypto/CoinChart';

interface CoinDetailsProps {
  coinId: string;
}

interface DexTrade {
  timeInterval: {
    minute: string;
  };
  quotePrice: number;
}

interface QueryData {
  ethereum: {
    dexTrades: DexTrade[];
  };
}

const GET_COIN_DATA = gql`
  query GetCoinData($address: String!, $from: ISO8601DateTime!) {
    ethereum {
      dexTrades(
        options: { limit: 100, desc: "block.timestamp.time" }
        baseCurrency: { is: $address }
      ) {
        timeInterval {
          minute(count: 15)
        }
        quotePrice
      }
    }
  }
`;

export function CoinDetails({ coinId }: CoinDetailsProps) {
  const fromDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - 7); // Go back 7 days
    return date.toISOString();
  }, []);

  const { loading, error, data } = useQuery<QueryData>(GET_COIN_DATA, {
    variables: {
      address: coinId,
      from: fromDate,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const chartData =
    data?.ethereum?.dexTrades?.map((trade) => ({
      time: trade.timeInterval.minute,
      price: trade.quotePrice,
    })) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Coin Details</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <CoinChart data={chartData} />
      </div>
    </div>
  );
}
