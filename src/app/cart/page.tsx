'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MainLayout } from '@/components/main-layout'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { ROUTES } from '@/lib/constants'
import { motion } from 'framer-motion'
import { formatPrice } from '@/lib/utils'
import { BookCard } from '@/components/book-card'
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react'

interface CartItem {
  id: string
  bookId: string
  quantity: number
  book: {
    id: string
    title: string
    author: { name: string }
    price: number
    discount: number
    coverImage?: string
  }
}

export default function CartPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'authenticated') {
      fetchCart()
    }
  }, [status])

  const fetchCart = async () => {
    try {
      const response = await fetch('/api/cart')
      if (response.ok) {
        const data = await response.json()
        setCartItems(data)
      }
    } catch (error) {
      console.error('Failed to fetch cart:', error)
    } finally {
      setLoading(false)
    }
  }

  const removeItem = async (id: string) => {
    try {
      await fetch(`/api/cart/${id}`, { method: 'DELETE' })
      setCartItems(cartItems.filter((item) => item.id !== id))
    } catch (error) {
      console.error('Failed to remove item:', error)
    }
  }

  const updateQuantity = async (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    try {
      await fetch(`/api/cart/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity }),
      })
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      )
    } catch (error) {
      console.error('Failed to update quantity:', error)
    }
  }

  const total = cartItems.reduce(
    (sum, item) =>
      sum +
      item.quantity *
        (item.book.price * (1 - item.book.discount / 100)),
    0
  )

  if (status === 'loading' || !session) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse">Loading...</div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-foreground mb-2">Shopping Cart</h1>
            <p className="text-foreground/60">{cartItems.length} items</p>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-pulse">Loading cart...</div>
            </div>
          ) : cartItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <ShoppingCart className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Your cart is empty
              </h2>
              <p className="text-foreground/60 mb-6">
                Discover great books and add them to your cart
              </p>
              <Button onClick={() => router.push(ROUTES.SHOP)}>
                Continue Shopping
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <motion.div
                className="lg:col-span-2 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-4 flex gap-4">
                      <div className="w-24 h-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                        {item.book.coverImage && (
                          <img
                            src={item.book.coverImage}
                            alt={item.book.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">
                          {item.book.title}
                        </h3>
                        <p className="text-sm text-foreground/60 mb-4">
                          {item.book.author.name}
                        </p>
                        <p className="text-lg font-bold text-primary mb-4">
                          {formatPrice(
                            item.book.price *
                              (1 - item.book.discount / 100)
                          )}
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border border-border rounded-lg">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity - 1
                                )
                              }
                              className="p-2 hover:bg-muted"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-4">{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity + 1
                                )
                              }
                              className="p-2 hover:bg-muted"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="p-6 sticky top-20">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Order Summary
                  </h3>
                  <div className="space-y-3 mb-4 pb-4 border-b border-border">
                    <div className="flex justify-between text-foreground/60">
                      <span>Subtotal</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                    <div className="flex justify-between text-foreground/60">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between text-foreground/60">
                      <span>Tax</span>
                      <span>{formatPrice(total * 0.1)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between font-bold text-lg text-foreground mb-6">
                    <span>Total</span>
                    <span>{formatPrice(total * 1.1)}</span>
                  </div>
                  <Button className="w-full mb-3">
                    Proceed to Checkout
                  </Button>
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => router.push(ROUTES.SHOP)}
                  >
                    Continue Shopping
                  </Button>
                </Card>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
