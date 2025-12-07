export interface Product {
  id: string
  title: string
  description?: string
  price: number
  originalPrice?: number
  discount?: number
  currency: string
  platform: string
  platformId?: string
  image: string
  images?: string[]
  url: string
  rating?: number
  reviews?: number
  availability: string
  shipping?: string
  features: string[]
  category?: string
  brand?: string
  sku?: string
  stock?: number
  color?: string
  size?: string
  weight?: string
  dimensions?: {
    width: number
    height: number
    depth: number
  }
  warranty?: string
  returnPolicy?: string
  seller?: {
    name: string
    rating?: number
    reviews?: number
    verified?: boolean
  }
  lastUpdated?: Date
  createdAt?: Date
}

export interface SearchResult {
  products: Product[]
  total: number
  query: string
  timestamp: Date
  platforms: string[]
}

export interface PriceHistory {
  productId: string
  platform: string
  prices: Array<{
    price: number
    currency: string
    timestamp: Date
  }>
  lowestPrice: number
  highestPrice: number
  averagePrice: number
  priceChange24h?: number
  priceChange7d?: number
}

export interface PriceAlert {
  id: string
  userId?: string
  productId: string
  targetPrice: number
  currentPrice: number
  platform: string
  email?: string
  active: boolean
  createdAt: Date
  triggeredAt?: Date
}

export interface SearchFilters {
  minPrice?: number
  maxPrice?: number
  platforms?: string[]
  categories?: string[]
  minRating?: number
  sortBy?: 'price' | 'rating' | 'discount' | 'relevance'
  sortOrder?: 'asc' | 'desc'
}

export interface APIResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
  timestamp: Date
  executionTime?: number
}

export interface Platform {
  name: string
  displayName: string
  logo: string
  baseUrl: string
  apiEndpoint?: string
  enabled: boolean
  rateLimit?: {
    requests: number
    period: string
  }
  supportedFeatures: string[]
}

export interface UserPreferences {
  preferredCurrency: string
  preferredLanguage: string
  notifications: {
    priceAlerts: boolean
    dealAlerts: boolean
    email: boolean
  }
  privacy: {
    trackSearchHistory: boolean
    shareData: boolean
  }
}

export interface Deal {
  id: string
  productId: string
  platform: string
  title: string
  originalPrice: number
  salePrice: number
  discountPercentage: number
  discountAmount: number
  currency: string
  validUntil: Date
  startDate: Date
  endDate: Date
  conditions?: string[]
  url: string
  image: string
  isFlash?: boolean
  isLimited?: boolean
  stockLevel?: string
  deals: Deal[]
}

export interface SearchAnalytics {
  query: string
  totalResults: number
  executionTime: number
  platformsUsed: string[]
  timestamp: Date
  userAgent?: string
  ipAddress?: string
}

export interface PriceComparison {
  productId: string
  productTitle: string
  platforms: Array<{
    name: string
    price: number
    originalPrice?: number
    discount?: number
    availability: string
    shipping?: string
    url: string
    rating?: number
  }>
  bestPrice: number
  bestPlatform: string
  priceRange: {
    min: number
    max: number
    avg: number
  }
  lastUpdated: Date
}

// API Configuration Types
export interface AmazonConfig {
  accessKey: string
  secretKey: string
  associateTag: string
  region: 'us' | 'uk' | 'ca' | 'de' | 'fr' | 'it' | 'es' | 'jp' | 'au'
  marketplace: string
}

export interface EbayConfig {
  clientId: string
  clientSecret: string
  environment: 'sandbox' | 'production'
  redirectUri?: string
}

export interface DummyApiConfig {
  baseUrl: string
  enabled: boolean
}

// Database Types (for future Supabase integration)
export interface DatabaseProduct {
  id: string
  product_data: Product
  search_history: SearchResult[]
  price_history: PriceHistory[]
  created_at: Date
  updated_at: Date
}

export interface DatabaseUser {
  id: string
  email: string
  preferences: UserPreferences
  search_history: SearchAnalytics[]
  price_alerts: PriceAlert[]
  created_at: Date
  updated_at: Date
}

// Error Types
export interface APIError {
  code: string
  message: string
  details?: any
  platform?: string
  timestamp: Date
}

export interface RateLimitError extends APIError {
  retryAfter: number
  requestsRemaining: number
}

// Utility Types
export type SortOption = 'price' | 'rating' | 'discount' | 'relevance'
export type SortOrder = 'asc' | 'desc'
export type PlatformName = 'amazon' | 'ebay' | 'aliexpress' | 'walmart' | 'target'

// Component Props Types
export interface ProductCardProps {
  product: Product
  onFavorite?: (productId: string) => void
  onPriceAlert?: (product: Product) => void
  showComparison?: boolean
  compact?: boolean
}

export interface SearchBarProps {
  onSearch: (query: string, filters?: SearchFilters) => Promise<void>
  loading?: boolean
  placeholder?: string
  suggestions?: string[]
}

export interface FilterPanelProps {
  filters: SearchFilters
  onFiltersChange: (filters: SearchFilters) => void
  availablePlatforms: string[]
  availableCategories: string[]
}