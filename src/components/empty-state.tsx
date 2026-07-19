'use client'

import { motion } from 'framer-motion'
import { Book, Search } from 'lucide-react'

export function EmptyState() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Book className="h-16 w-16 text-muted-foreground/50 mb-4" />
      </motion.div>
      <h3 className="text-lg font-semibold text-foreground mb-2">
        No books found
      </h3>
      <p className="text-foreground/60 max-w-md">
        Try adjusting your search or filters to find what you're looking for.
      </p>
    </motion.div>
  )
}
