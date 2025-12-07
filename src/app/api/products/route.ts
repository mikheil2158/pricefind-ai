import { NextRequest, NextResponse } from 'next/server'
import { PriceSearchAPI } from '@/api'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const productId = searchParams.get('id')
    const category = searchParams.get('category')
    const platform = searchParams.get('platform')
    const limit = parseInt(searchParams.get('limit') || '20')
    const offset = parseInt(searchParams.get('offset') || '0')

    if (productId) {
      // Get specific product details and price history
      const [productResult, priceHistoryResult] = await Promise.all([
        PriceSearchAPI.searchProducts('', {}), // Mock search for single product
        PriceSearchAPI.getPriceHistory(productId)
      ])

      if (productResult.success && productResult.data) {
        const product = productResult.data.products.find(p => p.id === productId)
        if (product) {
          return NextResponse.json({
            success: true,
            data: {
              product,
              priceHistory: priceHistoryResult.success ? priceHistoryResult.data : []
            },
            timestamp: new Date()
          })
        }
      }
      
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      )
    }

    // Get trending products
    const trendingProducts = await PriceSearchAPI.getTrendingProducts()
    
    let filteredProducts = trendingProducts

    // Apply filters
    if (category) {
      filteredProducts = filteredProducts.filter(p => 
        p.category?.toLowerCase().includes(category.toLowerCase()) ||
        p.features.some(f => f.toLowerCase().includes(category.toLowerCase()))
      )
    }

    if (platform) {
      filteredProducts = filteredProducts.filter(p => 
        p.platform.toLowerCase() === platform.toLowerCase()
      )
    }

    // Apply pagination
    const paginatedProducts = filteredProducts.slice(offset, offset + limit)

    return NextResponse.json({
      success: true,
      data: {
        products: paginatedProducts,
        total: filteredProducts.length,
        hasMore: offset + limit < filteredProducts.length,
        offset,
        limit
      },
      timestamp: new Date()
    })

  } catch (error) {
    console.error('Products API error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error'
      },
      { status: 500 }
    )
  }
}

// Get popular products
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, limit = 10 } = body

    if (action === 'trending') {
      const trendingProducts = await PriceSearchAPI.getTrendingProducts()
      
      return NextResponse.json({
        success: true,
        data: {
          products: trendingProducts.slice(0, limit),
          total: trendingProducts.length
        },
        timestamp: new Date()
      })
    }

    if (action === 'popular') {
      const suggestions = await PriceSearchAPI.getPopularSearches()
      
      return NextResponse.json({
        success: true,
        data: {
          searches: suggestions.slice(0, limit)
        },
        timestamp: new Date()
      })
    }

    return NextResponse.json(
      { success: false, error: 'Invalid action' },
      { status: 400 }
    )

  } catch (error) {
    console.error('Products POST API error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error'
      },
      { status: 500 }
    )
  }
}

// Health check endpoint
export async function OPTIONS() {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date(),
    version: '1.0.0',
    features: {
      search: true,
      trending: true,
      popular: true,
      priceHistory: true,
      filters: true
    }
  })
}