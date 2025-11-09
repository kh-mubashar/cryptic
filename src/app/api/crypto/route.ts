import { NextRequest, NextResponse } from 'next/server'

const API_BASE_URL = 'https://api.coingecko.com/api/v3'

async function fetchWithCache(url: string) {
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json'
    },
    // No revalidation - cache will only be cleared on manual refresh
    cache: 'force-cache'
  })
  
  if (!response.ok) {
    throw new Error(`API responded with status ${response.status}`)
  }

  return response.json()
}

// Named export for GET method
export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const { searchParams } = new URL(req.url)
    const endpoint = searchParams.get('endpoint')
    
    if (!endpoint) {
      return NextResponse.json({ error: 'No endpoint provided' }, { status: 400 })
    }

    // Handle combined data request
    if (endpoint === 'combined') {
      const [globalData, coinsData] = await Promise.all([
        fetchWithCache(`${API_BASE_URL}/global`),
        fetchWithCache(`${API_BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true`)
      ])

      return NextResponse.json({
        global: globalData,
        coins: coinsData,
        timestamp: Date.now()
      })
    }

    return NextResponse.json({ error: `Unsupported endpoint: ${endpoint}` }, { status: 400 })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch data' }, 
      { status: 500 }
    )
  }
}
