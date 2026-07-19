'use client'

import { useCallback, useState } from 'react'

export interface CartItem {
  id: string
  bookId: string
  title: string
  price: number
  quantity: number
  image?: string
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.bookId === item.bookId)
      if (existing) {
        return prev.map((i) =>
          i.bookId === item.bookId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      }
      return [...prev, item]
    })
  }, [])

  const removeItem = useCallback((bookId: string) => {
    setItems((prev) => prev.filter((i) => i.bookId !== bookId))
  }, [])

  const updateQuantity = useCallback((bookId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(bookId)
      return
    }
    setItems((prev) =>
      prev.map((i) =>
        i.bookId === bookId ? { ...i, quantity } : i
      )
    )
  }, [removeItem])

  const clear = useCallback(() => {
    setItems([])
  }, [])

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return {
    items,
    total,
    itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
    addItem,
    removeItem,
    updateQuantity,
    clear,
  }
}
