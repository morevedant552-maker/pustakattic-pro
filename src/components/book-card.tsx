'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { formatPrice } from '@/lib/utils'
import { Heart } from 'lucide-react'

interface BookCardProps {
  id: string
  title: string
  author: string
  price: number
  discount?: number
  image?: string
  rating?: number
  reviews?: number
  onAddToCart?: () => void
  onAddToWishlist?: () => void
}

export function BookCard({
  id,
  title,
  author,
  price,
  discount = 0,
  image,
  rating = 0,
  reviews = 0,
  onAddToCart,
  onAddToWishlist,
}: BookCardProps) {
  const finalPrice = price * (1 - discount / 100)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full"
    >
      <Link href={`/book/${id}`}>
        <div className="premium-card h-full flex flex-col overflow-hidden">
          <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
            {image ? (
              <motion.img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                whileHover={{ scale: 1.15 }}
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-muted-foreground">No image</span>
              </div>
            )}

            {discount > 0 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-2.5 py-1 rounded-lg text-xs font-semibold"
              >
                -{discount}%
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                onAddToWishlist?.()
              }}
              className="absolute top-3 left-3 p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
            >
              <Heart
                size={18}
                className="text-white fill-white opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.button>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-foreground line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-foreground/60 mb-3">{author}</p>

              {rating > 0 && (
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-xs ${
                          i < Math.round(rating)
                            ? 'text-yellow-400'
                            : 'text-muted-foreground'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-foreground/60">
                    ({reviews})
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <div>
                {discount > 0 ? (
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">
                      {formatPrice(finalPrice)}
                    </span>
                    <span className="text-sm line-through text-foreground/50">
                      {formatPrice(price)}
                    </span>
                  </div>
                ) : (
                  <span className="text-lg font-bold text-foreground">
                    {formatPrice(price)}
                  </span>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault()
                  onAddToCart?.()
                }}
                className="w-full py-2 px-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Add to Cart
              </motion.button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
