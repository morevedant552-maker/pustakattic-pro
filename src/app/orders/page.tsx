'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MainLayout } from '@/components/main-layout'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { ROUTES } from '@/lib/constants'
import { motion } from 'framer-motion'
import { Order } from '@/types'
import { formatPrice, formatDate } from '@/lib/utils'
import Link from 'next/link'
import { Package, ArrowRight } from 'lucide-react'

export default function OrdersPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(ROUTES.LOGIN)
    }
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetchOrders()
    }
  }, [status])

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders')
      if (response.ok) {
        const data = await response.json()
        setOrders(data)
      }
    } catch (error) {
      console.error('Failed to fetch orders:', error)
    } finally {
      setLoading(false)
    }
  }

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
            <h1 className="text-4xl font-bold text-foreground mb-2">Your Orders</h1>
            <p className="text-foreground/60">Track and manage your purchases</p>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-pulse">Loading orders...</div>
            </div>
          ) : orders.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <Package className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">
                No orders yet
              </h2>
              <p className="text-foreground/60 mb-6">
                Start your literary journey with us
              </p>
              <Link href={ROUTES.SHOP}>
                <Button>
                  Browse Books
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {orders.map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">Order Number</p>
                        <p className="font-semibold text-foreground">
                          {order.orderNumber}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">Date</p>
                        <p className="font-semibold text-foreground">
                          {formatDate(order.createdAt)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">Total</p>
                        <p className="font-semibold text-foreground">
                          {formatPrice(order.total)}
                        </p>
                      </div>
                      <div className="flex items-end">
                        <Link href={`/orders/${order.id}`}>
                          <Button size="sm" variant="secondary">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
