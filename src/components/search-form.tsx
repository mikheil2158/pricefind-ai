'use client'

import { useState } from 'react'
import { Search, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface SearchFormProps {
  onSearch: (query: string) => Promise<void>
  loading?: boolean
}

export function SearchForm({ onSearch, loading = false }: SearchFormProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim() && !loading) {
      await onSearch(query.trim())
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const popularSearches = [
    'iPhone 15 Pro Max',
    'Samsung Galaxy S24',
    'MacBook Pro',
    'Sony Headphones',
    'Gaming Laptop'
  ]

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search for any product (e.g., iPhone 15, gaming laptop, headphones)..."
            value={query}
            onChange={handleInputChange}
            className="pl-10 pr-4 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            disabled={loading}
          />
        </div>
        <Button
          type="submit"
          disabled={!query.trim() || loading}
          className="px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 w-5 h-5 animate-spin" />
              Searching...
            </>
          ) : (
            <>
              <Search className="mr-2 w-5 h-5" />
              Search
            </>
          )}
        </Button>
      </form>
      
      {/* Popular Searches */}
      <div className="mt-4">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Popular searches:</p>
        <div className="flex flex-wrap gap-2">
          {popularSearches.map((search) => (
            <button
              key={search}
              onClick={() => setQuery(search)}
              disabled={loading}
              className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full transition-colors duration-200 disabled:opacity-50"
            >
              {search}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}