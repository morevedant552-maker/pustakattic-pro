'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ROUTES } from '@/lib/constants'
import { MainLayout } from '@/components/main-layout'
import { BookCard } from '@/components/book-card'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Badge } from '@/components/badge'
import { ArrowRight, BookOpen, Sparkles, Users } from 'lucide-react'

// Sample featured books
const featuredBooks = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    price: 16.99,
    discount: 15,
    image: 'https://covers.openlibrary.org/b/id/8446816-M.jpg',
    rating: 4.5,
    reviews: 2847,
  },
  {
    id: '2',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    price: 18.99,
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
    image: 'https://covers.openlibrary.org/b/id/8256918-M.jpg',
    rating: 4.6,
    reviews: 1956,
  },
  {
    id: '4',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    price: 17.99,
    image: 'https://covers.openlibrary.org/b/id/8418906-M.jpg',
    rating: 4.7,
    reviews: 2564,
  },
]

const newArrivals = [
  {
    id: '5',
    title: 'Fourth Wing',
    author: 'Rebecca Yarros',
    price: 19.99,
    image: 'https://covers.openlibrary.org/b/id/13108838-M.jpg',
    rating: 4.6,
    reviews: 1842,
  },
  {
    id: '6',
    title: 'Lessons in Chemistry',
    author: 'Bonnie Garmus',
    price: 18.99,
    image: 'https://covers.openlibrary.org/b/id/10789207-M.jpg',
    rating: 4.5,
    reviews: 1567,
  },
  {
    id: '7',
    title: 'The Woman in Me',
    author: 'Britney Spears',
    price: 20.99,
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
    image: 'https://covers.openlibrary.org/b/id/12706314-M.jpg',
    rating: 4.7,
    reviews: 1234,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const features = [
  {
    icon: BookOpen,
    title: 'Curated Selection',
    description: 'Hand-picked books from independent authors and bestselling classics.',
  },
  {
    icon: Sparkles,
    title: 'Exclusive Editions',
    description: 'Limited edition and signed copies from your favorite authors.',
  },
  {
    icon: Users,
    title: 'Author Community',
    description: 'Connect with writers and discover behind-the-scenes stories.',
  },
]

const testimonials = [
  {
    text: 'PUSTAKATTIC has transformed how I discover books. The curation is exceptional and the experience feels premium.',
    author: 'Sarah Mitchell',
    role: 'Book Collector',
  },
  {
    text: 'Finally, a bookstore that understands the value of quality over quantity. Every book selection feels intentional.',
    author: 'James Chen',
    role: 'Literature Professor',
  },
  {
    text: 'The attention to detail in every aspect—from the website design to book recommendations—is truly remarkable.',
    author: 'Emma Richardson',
    role: 'Author & Reader',
  },
]

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6"
          >
            <Badge variant="primary">Welcome to PUSTAKATTIC PRO</Badge>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-7xl font-bold text-gradient mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where Every Book Finds Its Reader
          </motion.h1>

          <motion.p
            className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover a carefully curated collection of extraordinary books. From timeless
            classics to contemporary masterpieces, we celebrate the art of reading.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="group">
              Explore Our Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link
              href={ROUTES.SHOP}
              className="px-6 py-3 text-lg font-medium border border-border rounded-lg hover:bg-muted/50 transition-colors"
            >
              Browse Books
            </Link>
          </motion.div>

          {/* Floating books animation */}
          <motion.div
            className="mt-16 relative h-48 hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <motion.div
              className="absolute left-1/4 w-24 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"
              animate={{ y: [0, -20, 0], rotateZ: [-5, 0, -5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute left-1/2 w-24 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg"
              animate={{ y: [0, 20, 0], rotateZ: [5, 0, 5] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute right-1/4 w-24 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"
              animate={{ y: [0, -15, 0], rotateZ: [-3, 0, -3] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Collection</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Our editors have selected the most compelling reads of the season
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredBooks.map((book) => (
              <motion.div key={book.id} variants={itemVariants}>
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
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose PUSTAKATTIC</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card icon={Icon} className="h-full text-center p-8">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-foreground/60">{feature.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="flex items-center justify-between mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">New Arrivals</h2>
              <p className="text-foreground/60">Latest additions to our collection</p>
            </div>
            <Link href={ROUTES.SHOP}>
              <Button variant="secondary">
                View All
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {newArrivals.map((book) => (
              <motion.div key={book.id} variants={itemVariants}>
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
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Loved by Readers</h2>
            <p className="text-lg text-foreground/60">Join thousands who have discovered their next favorite read</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full flex flex-col justify-between p-8">
                  <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-3xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Stay Inspired</h2>
            <p className="text-lg text-foreground/60 mb-8">
              Subscribe to our newsletter for book recommendations, author interviews, and exclusive offers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="premium-input flex-1"
              />
              <Button size="lg">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  )
}
