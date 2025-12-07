import { NextRequest, NextResponse } from 'next/server'
import { PriceSearchAPI, searchSuggestions } from '@/api'
import { SearchFilters } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { query, filters }: { query: string; filters?: SearchFilters } = body

    if (!query || typeof query !== 'string' || query.trim().length === 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Search query is required' 
        },
        { status: 400 }
      )
    }

    const result = await PriceSearchAPI.searchProducts(query.trim(), filters)
    
    return NextResponse.json(result, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q') || searchParams.get('query')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const platforms = searchParams.get('platforms')?.split(',') || []
    const minRating = searchParams.get('minRating')
    const sortBy = searchParams.get('sortBy') as any
    const sortOrder = searchParams.get('sortOrder') as any

    const filters: SearchFilters = {}
    
    if (minPrice) filters.minPrice = parseFloat(minPrice)
    if (maxPrice) filters.maxPrice = parseFloat(maxPrice)
    if (platforms.length > 0) filters.platforms = platforms
    if (minRating) filters.minRating = parseFloat(minRating)
    if (sortBy) filters.sortBy = sortBy
    if (sortOrder) filters.sortOrder = sortOrder

    const result = query 
      ? await PriceSearchAPI.searchProducts(query, filters)
      : {
          success: true,
          data: {
            products: [],
            total: 0,
            query: '',
            timestamp: new Date(),
            platforms: []
          },
          timestamp: new Date()
        }
    
    return NextResponse.json(result)
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error'
      },
      { status: 500 }
    )
  }
}

// Return search suggestions
export async function OPTIONS() {
  return NextResponse.json({
    suggestions: searchSuggestions,
    features: {
      priceComparison: true,
      priceTracking: true,
      priceAlerts: false, // Will be enabled with database
      reviews: true,
      filtering: true,
      sorting: true
    },
    platforms: ['Amazon', 'eBay', 'Demo'],
    currencies: ['USD', 'EUR', 'GBP'],
    languages: ['en', 'ka', 'ru']
  })
}