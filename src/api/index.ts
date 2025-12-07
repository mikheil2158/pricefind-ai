import { Product, SearchResult, SearchFilters, APIResponse, PriceHistory } from '@/types'

// Mock data for demonstration
export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'iPhone 15 Pro Max 256GB Natural Titanium',
    price: 1199,
    originalPrice: 1299,
    discount: 100,
    currency: 'USD',
    platform: 'Amazon',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop',
    url: 'https://amazon.com/product/iphone-15-pro-max',
    rating: 4.8,
    reviews: 1234,
    availability: 'In Stock',
    shipping: 'Free 2-day shipping',
    features: ['A17 Pro chip', '48MP camera', '120Hz display', '5G']
  },
  {
    id: '2',
    title: 'Samsung Galaxy S24 Ultra 256GB',
    price: 1149,
    originalPrice: 1299,
    discount: 150,
    currency: 'USD',
    platform: 'eBay',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=300&fit=crop',
    url: 'https://ebay.com/product/galaxy-s24-ultra',
    rating: 4.7,
    reviews: 856,
    availability: 'Available',
    shipping: 'Free shipping',
    features: ['S Pen included', '200MP camera', 'AI features', '5000mAh battery']
  },
  {
    id: '3',
    title: 'Google Pixel 8 Pro 128GB',
    price: 999,
    originalPrice: 1099,
    discount: 100,
    currency: 'USD',
    platform: 'Amazon',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop',
    url: 'https://amazon.com/product/pixel-8-pro',
    rating: 4.6,
    reviews: 432,
    availability: 'In Stock',
    shipping: 'Prime shipping',
    features: ['Tensor G3', 'Magic Eraser', 'Best AI camera', 'Android 14']
  },
  {
    id: '4',
    title: 'MacBook Pro 14" M3 Pro',
    price: 1999,
    originalPrice: 2199,
    discount: 200,
    currency: 'USD',
    platform: 'Amazon',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop',
    url: 'https://amazon.com/product/macbook-pro-m3',
    rating: 4.9,
    reviews: 2341,
    availability: 'In Stock',
    shipping: 'Free shipping',
    features: ['M3 Pro chip', '18GB RAM', '512GB SSD', 'Liquid Retina XDR display']
  },
  {
    id: '5',
    title: 'Sony WH-1000XM5 Wireless Headphones',
    price: 349,
    originalPrice: 399,
    discount: 50,
    currency: 'USD',
    platform: 'eBay',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
    url: 'https://ebay.com/product/sony-wh1000xm5',
    rating: 4.7,
    reviews: 1892,
    availability: 'In Stock',
    shipping: 'Free shipping',
    features: ['30hr battery', 'Noise canceling', 'Quick charge', 'Multipoint connection']
  },
  {
    id: '6',
    title: 'Nintendo Switch OLED Model',
    price: 319,
    originalPrice: 349,
    discount: 30,
    currency: 'USD',
    platform: 'Amazon',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
    url: 'https://amazon.com/product/nintendo-switch-oled',
    rating: 4.8,
    reviews: 4567,
    availability: 'In Stock',
    shipping: 'Free shipping',
    features: ['7" OLED screen', 'Enhanced audio', 'Wired LAN port', '64GB internal storage']
  }
]

// Platform configurations
export const platforms = {
  amazon: {
    name: 'Amazon',
    enabled: false, // Will be enabled when API keys are provided
    logo: '🟠',
    color: 'orange'
  },
  ebay: {
    name: 'eBay',
    enabled: false, // Will be enabled when API keys are provided
    logo: '🔵',
    color: 'blue'
  },
  dummy: {
    name: 'Demo',
    enabled: true,
    logo: '🧪',
    color: 'green'
  }
}

// Mock API functions
export class PriceSearchAPI {
  static async searchProducts(query: string, filters?: SearchFilters): Promise<APIResponse<SearchResult>> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    try {
      let filteredProducts = [...mockProducts]

      // Filter by search query
      if (query && query.trim()) {
        const searchTerm = query.toLowerCase().trim()
        filteredProducts = filteredProducts.filter(product =>
          product.title.toLowerCase().includes(searchTerm) ||
          product.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
          product.platform.toLowerCase().includes(searchTerm)
        )
      }

      // Apply filters
      if (filters) {
        if (filters.minPrice !== undefined) {
          filteredProducts = filteredProducts.filter(p => p.price >= filters.minPrice!)
        }
        if (filters.maxPrice !== undefined) {
          filteredProducts = filteredProducts.filter(p => p.price <= filters.maxPrice!)
        }
        if (filters.platforms && filters.platforms.length > 0) {
          filteredProducts = filteredProducts.filter(p => filters.platforms!.includes(p.platform))
        }
        if (filters.minRating !== undefined) {
          filteredProducts = filteredProducts.filter(p => (p.rating || 0) >= filters.minRating!)
        }
      }

      // Sort results
      if (filters?.sortBy) {
        filteredProducts.sort((a, b) => {
          switch (filters.sortBy) {
            case 'price':
              return filters.sortOrder === 'desc' ? b.price - a.price : a.price - b.price
            case 'rating':
              return filters.sortOrder === 'desc' ? (b.rating || 0) - (a.rating || 0) : (a.rating || 0) - (b.rating || 0)
            case 'discount':
              return filters.sortOrder === 'desc' ? (b.discount || 0) - (a.discount || 0) : (a.discount || 0) - (b.discount || 0)
            default:
              return 0
          }
        })
      }

      const platforms = Array.from(new Set(filteredProducts.map(p => p.platform)))

      return {
        success: true,
        data: {
          products: filteredProducts,
          total: filteredProducts.length,
          query,
          timestamp: new Date(),
          platforms
        },
        timestamp: new Date(),
        executionTime: 1500
      }
    } catch (error) {
      return {
        success: false,
        error: 'Failed to search products',
        message: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date()
      }
    }
  }

  static async getPriceHistory(productId: string): Promise<APIResponse<PriceHistory[]>> {
    // Mock price history data
    const mockHistory: PriceHistory = {
      productId,
      platform: 'Amazon',
      prices: Array.from({ length: 30 }, (_, i) => ({
        price: 1199 - (i * 5), // Simulate price drops
        currency: 'USD',
        timestamp: new Date(Date.now() - (i * 24 * 60 * 60 * 1000))
      })),
      lowestPrice: 899,
      highestPrice: 1299,
      averagePrice: 1049,
      priceChange24h: -10,
      priceChange7d: -25
    }

    await new Promise(resolve => setTimeout(resolve, 500))

    return {
      success: true,
      data: [mockHistory],
      timestamp: new Date()
    }
  }

  static async getPopularSearches(): Promise<string[]> {
    return [
      'iPhone 15 Pro Max',
      'Samsung Galaxy S24',
      'MacBook Pro',
      'Sony Headphones',
      'Gaming Laptop',
      'Nintendo Switch',
      'AirPods Pro',
      'iPad Pro'
    ]
  }

  static async getTrendingProducts(): Promise<Product[]> {
    return mockProducts.slice(0, 3)
  }
}

// Configuration for real APIs (to be filled when API keys are provided)
export const apiConfig = {
  amazon: {
    accessKey: process.env.AMAZON_ACCESS_KEY || '',
    secretKey: process.env.AMAZON_SECRET_KEY || '',
    associateTag: process.env.AMAZON_ASSOCIATE_TAG || '',
    region: 'us' as const
  },
  ebay: {
    clientId: process.env.EBAY_CLIENT_ID || '',
    clientSecret: process.env.EBAY_CLIENT_SECRET || '',
    environment: 'sandbox' as const
  },
  supabase: {
    url: process.env.SUPABASE_URL || '',
    anonKey: process.env.SUPABASE_ANON_KEY || ''
  }
}

// Helper functions for API validation
export function isAmazonConfigured(): boolean {
  return !!(apiConfig.amazon.accessKey && apiConfig.amazon.secretKey && apiConfig.amazon.associateTag)
}

export function isEbayConfigured(): boolean {
  return !!(apiConfig.ebay.clientId && apiConfig.ebay.clientSecret)
}

export function isSupabaseConfigured(): boolean {
  return !!(apiConfig.supabase.url && apiConfig.supabase.anonKey)
}

// Export search query suggestions
export const searchSuggestions = [
  'iPhone 15 Pro Max',
  'Samsung Galaxy S24',
  'MacBook Pro M3',
  'Sony WH-1000XM5',
  'Nintendo Switch OLED',
  'iPad Pro 12.9',
  'AirPods Pro',
  'Gaming Laptop',
  '4K Monitor',
  'Wireless Mouse'
]