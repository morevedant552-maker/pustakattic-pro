'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  animated?: boolean
  icon?: LucideIcon
}

export function Card({
  children,
  className,
  hover = true,
  animated = true,
  icon: Icon,
}: CardProps) {
  const variants = animated
    ? {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        whileHover: hover ? { y: -4 } : {},
      }
    : {}

  return (
    <motion.div
      {...(animated && variants)}
      transition={{ duration: 0.3 }}
      className={cn('premium-card', className)}
    >
      {Icon && (
        <motion.div
          className="mb-4"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Icon className="h-6 w-6 text-primary" />
        </motion.div>
      )}
      {children}
    </motion.div>
  )
}
