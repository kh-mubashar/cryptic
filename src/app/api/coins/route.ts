import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    const response = await fetch(process.env.NEXT_PUBLIC_BITQUERY_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': process.env.NEXT_PUBLIC_BITQUERY_KEY!,
      },
      body: JSON.stringify({
        query: `
          query {
            ethereum {
              dexTrades(
                options: { limit: 10, desc: "trades" }
                time: { since: "${oneDayAgo.toISOString()}" }
              ) {
                baseCurrency {
                  symbol
                  name
                  address
                }
                quoteCurrency {
                  symbol
                }
                quotePrice
                block {
                  timestamp {
                    time(format: "%Y-%m-%d %H:%M:%S")
                  }
                }
                trades: count
              }
            }
          }
        `,
      }),
    });

    const data = await response.json();

    if (data.errors) {
      console.error('Bitquery API error:', data.errors);
      throw new Error(data.errors[0].message);
    }

    if (!data.data?.ethereum?.dexTrades) {
      console.error('Unexpected data structure:', data);
      throw new Error('Invalid data structure received from Bitquery');
    }

    interface Trade {
      baseCurrency: {
        address: string;
        name: string;
        symbol: string;
      };
      quotePrice: number;
      trades: number;
    }

    const uniqueCoins = new Map();
    data.data.ethereum.dexTrades.forEach((trade: Trade) => {
      const id = trade.baseCurrency.address;
      if (!uniqueCoins.has(id) || trade.trades > uniqueCoins.get(id).trades) {
        uniqueCoins.set(id, {
          id,
          name: trade.baseCurrency.name,
          symbol: trade.baseCurrency.symbol,
          price: trade.quotePrice,
          priceChange: 0, // We'll calculate this in a follow-up query
          trades: trade.trades,
        });
      }
    });

    const coins = Array.from(uniqueCoins.values());

    return NextResponse.json(coins);
  } catch (error) {
    console.error('Error fetching cryptocurrency data:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch cryptocurrency data',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
