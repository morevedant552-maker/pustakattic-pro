'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface RatingProps {
  rating: number
  count?: number
  interactive?: boolean
  onChange?: (rating: number) => void
}

export function Rating({
  rating,
  count,
  interactive = false,
  onChange,
}: RatingProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1)

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {stars.map((star) => (
          <motion.button
            key={star}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => interactive && onChange?.(star)}
            disabled={!interactive}
            className={cn(
              'transition-colors',
              interactive && 'cursor-pointer hover:text-yellow-400'
            )}
          >
            <Star
              size={16}
              className={cn(
                'transition-colors',
                star <= Math.round(rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-muted-foreground'
              )}
            />
          </motion.button>
        ))}
      </div>
      <span className="text-sm text-foreground/70">
        {rating.toFixed(1)}
        {count && ` (${count})`}
      </span>
    </div>
  )
}
