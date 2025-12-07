'use client'

import { useState } from 'react'
import { ExternalLink, Star, ShoppingCart, Heart, TrendingUp, Package, Truck, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatPrice, calculateDiscount } from '@/lib/utils'

interface Product {
  id: string
  title: string
  price: number
  originalPrice?: number
  discount?: number
  currency: string
  platform: string
  image: string
  url: string
  rating?: number
  reviews?: number
  availability: string
  shipping?: string
  features: string[]
}

interface ProductResultsProps {
  products: Product[]
  loading?: boolean
}

export function ProductResults({ products, loading = false }: ProductResultsProps) {
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'discount'>('price')
  const [filterPlatform, setFilterPlatform] = useState<string>('all')

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="h-48 bg-gray-300 rounded-lg"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-8 bg-gray-300 rounded w-1/3"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          No products found
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Try adjusting your search terms or check back later for new products.
        </p>
      </div>
    )
  }

  const platforms = ['all', ...Array.from(new Set(products.map(p => p.platform)))]
  
  const filteredProducts = products.filter(product => 
    filterPlatform === 'all' || product.platform === filterPlatform
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price
      case 'rating':
        return (b.rating || 0) - (a.rating || 0)
      case 'discount':
        return (b.discount || 0) - (a.discount || 0)
      default:
        return 0
    }
  })

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Showing {filteredProducts.length} of {products.length} products
        </div>
        
        <div className="flex gap-4">
          {/* Platform Filter */}
          <select
            value={filterPlatform}
            onChange={(e) => setFilterPlatform(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-600 text-sm"
          >
            {platforms.map(platform => (
              <option key={platform} value={platform}>
                {platform === 'all' ? 'All Platforms' : platform}
              </option>
            ))}
          </select>
          
          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'price' | 'rating' | 'discount')}
            className="px-3 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-600 text-sm"
          >
            <option value="price">Sort by Price</option>
            <option value="rating">Sort by Rating</option>
            <option value="discount">Sort by Discount</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => {
          const discountPercentage = product.discount || calculateDiscount(product.originalPrice || 0, product.price)
          
          return (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {discountPercentage > 0 && (
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                      -{discountPercentage}%
                    </Badge>
                  )}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="secondary" className="rounded-full w-8 h-8">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Platform */}
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {product.platform}
                    </Badge>
                    {product.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        {product.reviews && (
                          <span className="text-sm text-gray-500">({product.reviews})</span>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                    {product.title}
                  </h3>
                  
                  {/* Features */}
                  {product.features.length > 0 && (
                    <div className="space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Price */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {formatPrice(product.price, product.currency)}
                      </span>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(product.originalPrice, product.currency)}
                        </span>
                      )}
                    </div>
                    
                    {/* Availability & Shipping */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Package className="w-4 h-4" />
                        {product.availability}
                      </div>
                      {product.shipping && (
                        <div className="flex items-center gap-1">
                          <Truck className="w-4 h-4" />
                          {product.shipping}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      View Deal
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a 
                        href={product.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Load More Button (if needed) */}
      {sortedProducts.length > 0 && (
        <div className="text-center">
          <Button variant="outline" className="px-8">
            <TrendingUp className="w-4 h-4 mr-2" />
            Load More Results
          </Button>
        </div>
      )}
    </div>
  )
}