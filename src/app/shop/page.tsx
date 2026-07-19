'use client'

import { MainLayout } from '@/components/main-layout'
import { motion } from 'framer-motion'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Badge } from '@/components/badge'
import { BookCard } from '@/components/book-card'
import { ROUTES } from '@/lib/constants'
import Link from 'next/link'
import { Filter, ArrowUpDown } from 'lucide-react'
import { useState } from 'react'

// Sample books for shop
const allBooks = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    price: 16.99,
    discount: 15,
    category: 'Fiction',
    image: 'https://covers.openlibrary.org/b/id/8446816-M.jpg',
    rating: 4.5,
    reviews: 2847,
  },
  {
    id: '2',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    price: 18.99,
    category: 'Science Fiction',
    image: 'https://covers.openlibrary.org/b/id/10475275-M.jpg',
    rating: 4.8,
    reviews: 3124,
  },
  {
    id: '3',
    title: 'Daisy Jones & The Six',
    author: 'Taylor Jenkins Reid',
    price: 17.99,
    discount: 20,
    category: 'Fiction',
    image: 'https://covers.openlibrary.org/b/id/8256918-M.jpg',
    rating: 4.6,
    reviews: 1956,
  },
  {
    id: '4',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    price: 17.99,
    category: 'Fiction',
    image: 'https://covers.openlibrary.org/b/id/8418906-M.jpg',
    rating: 4.7,
    reviews: 2564,
  },
  {
    id: '5',
    title: 'Fourth Wing',
    author: 'Rebecca Yarros',
    price: 19.99,
    category: 'Fantasy',
    image: 'https://covers.openlibrary.org/b/id/13108838-M.jpg',
    rating: 4.6,
    reviews: 1842,
  },
  {
    id: '6',
    title: 'Lessons in Chemistry',
    author: 'Bonnie Garmus',
    price: 18.99,
    category: 'Fiction',
    image: 'https://covers.openlibrary.org/b/id/10789207-M.jpg',
    rating: 4.5,
    reviews: 1567,
  },
  {
    id: '7',
    title: 'The Woman in Me',
    author: 'Britney Spears',
    price: 20.99,
    category: 'Biography',
    image: 'https://covers.openlibrary.org/b/id/12883220-M.jpg',
    rating: 4.4,
    reviews: 892,
  },
  {
    id: '8',
    title: 'Happy Place',
    author: 'Emily Henry',
    price: 17.99,
    discount: 10,
    category: 'Romance',
    image: 'https://covers.openlibrary.org/b/id/12706314-M.jpg',
    rating: 4.7,
    reviews: 1234,
  },
]

const categories = ['All Books', 'Fiction', 'Fantasy', 'Science Fiction', 'Biography', 'Romance']
const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Books')
  const [sortBy, setSortBy] = useState('newest')
  const [showFilters, setShowFilters] = useState(false)

  const filteredBooks =
    selectedCategory === 'All Books'
      ? allBooks
      : allBooks.filter((book) => book.category === selectedCategory)

  return (
    <MainLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
          <motion.div
            className="mx-auto max-w-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-foreground mb-4">Our Collection</h1>
            <p className="text-lg text-foreground/60">
              Explore {filteredBooks.length} carefully curated books
            </p>
          </motion.div>
        </section>

        {/* Filters & Shop */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <motion.div
                className={`lg:col-span-1 ${
                  showFilters ? 'block' : 'hidden'
                } lg:block`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-6">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground/60 hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <h3 className="font-bold text-lg mb-6">Sort By</h3>
                    <div className="space-y-3">
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setSortBy(option.value)}
                          className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            sortBy === option.value
                              ? 'bg-primary text-primary-foreground'
                              : 'text-foreground/60 hover:text-foreground hover:bg-muted/50'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Books Grid */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Mobile Filter Toggle */}
                <div className="lg:hidden mb-6 flex items-center justify-between">
                  <p className="text-sm text-foreground/60">
                    Showing {filteredBooks.length} books
                  </p>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <Filter size={18} />
                    Filter
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredBooks.map((book, index) => (
                    <motion.div
                      key={book.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                    >
                      <BookCard
                        {...book}
                        onAddToCart={() => {
                          // TODO: Implement add to cart
                        }}
                        onAddToWishlist={() => {
                          // TODO: Implement add to wishlist
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
