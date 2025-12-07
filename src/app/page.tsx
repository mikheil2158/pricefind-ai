'use client'

import { useState, useCallback } from 'react'
import { Search, TrendingUp, Shield, Zap, ChevronRight, Star, Users, Clock, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SearchForm } from '@/components/search-form'
import { ProductResults } from '@/components/product-results'
import { FeatureSection } from '@/components/feature-section'
import { useToast } from '@/components/ui/use-toast'

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

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { toast } = useToast()

  const handleSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a search query',
        variant: 'destructive',
      })
      return
    }

    setSearchQuery(query)
    setLoading(true)

    try {
      // TODO: Replace with actual API calls
      // Mock data for demonstration
      const mockProducts: Product[] = [
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
          features: ['A17 Pro chip', '48MP camera', '120Hz display']
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
          features: ['S Pen included', '200MP camera', 'AI features']
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
          features: ['Tensor G3', 'Magic Eraser', 'Best AI camera']
        }
      ]

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setProducts(mockProducts)
      
      toast({
        title: 'Success',
        description: `Found ${mockProducts.length} products for "${query}"`,
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to search products. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }, [toast])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Find the{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Best Prices
              </span>
              <br />
              with AI Intelligence
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Compare prices across Amazon, eBay, and other major platforms. Our AI analyzes thousands of products 
              to find you the best deals in seconds.
            </p>
            
            {/* Search Form */}
            <div className="max-w-2xl mx-auto">
              <SearchForm onSearch={handleSearch} loading={loading} />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Products Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">500K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">$50M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Saved by Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">99.9%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose PriceFind AI?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Experience the future of smart shopping with our AI-powered platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureSection
              icon={<Search className="w-8 h-8 text-blue-600" />}
              title="AI-Powered Search"
              description="Our advanced AI understands your needs and finds the best products across all platforms."
            />
            <FeatureSection
              icon={<TrendingUp className="w-8 h-8 text-green-600" />}
              title="Price Tracking"
              description="Get notified when prices drop on your favorite products with our smart tracking system."
            />
            <FeatureSection
              icon={<Shield className="w-8 h-8 text-purple-600" />}
              title="Verified Deals"
              description="All deals are verified and updated in real-time to ensure you get authentic savings."
            />
            <FeatureSection
              icon={<Zap className="w-8 h-8 text-orange-600" />}
              title="Lightning Fast"
              description="Get price comparisons in seconds, not minutes. Our optimized system delivers instant results."
            />
            <FeatureSection
              icon={<Star className="w-8 h-8 text-yellow-600" />}
              title="Quality Analysis"
              description="AI analyzes product reviews and ratings to help you make informed purchasing decisions."
            />
            <FeatureSection
              icon={<Globe className="w-8 h-8 text-red-600" />}
              title="Global Coverage"
              description="Compare prices from multiple countries and currencies to find the best deals worldwide."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Three simple steps to find the best prices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Search Products
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Enter what you're looking for in our intelligent search bar
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                AI Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our AI scans multiple platforms and analyzes millions of data points
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Best Deals
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get the best prices, deals, and recommendations instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join thousands of satisfied shoppers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "PriceFind AI saved me over $200 on my last purchase. The AI recommendations were spot on!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Verified Buyer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "The price tracking feature is amazing. I got notified when my desired laptop went on sale!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Mike Chen</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Verified Buyer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "As a developer, I love the clean API and fast response times. Highly recommend!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Alex Rodriguez</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Developer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Search Results Section */}
      {(products.length > 0 || loading) && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {searchQuery ? `Search Results for "${searchQuery}"` : 'Search Results'}
                </h2>
                {products.length > 0 && (
                  <p className="text-gray-600 dark:text-gray-400">
                    Found {products.length} products • Best prices updated in real-time
                  </p>
                )}
              </div>
              
              <ProductResults products={products} loading={loading} />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Saving Money?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of smart shoppers who trust PriceFind AI to find the best deals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Searching Free
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}