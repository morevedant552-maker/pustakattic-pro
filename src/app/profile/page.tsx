'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { MainLayout } from '@/components/main-layout'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { ROUTES } from '@/lib/constants'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { User, LogOut, ShoppingBag, MapPin, Settings } from 'lucide-react'

const profileMenu = [
  { icon: User, label: 'Account Settings', href: '/profile/settings' },
  { icon: ShoppingBag, label: 'Orders', href: ROUTES.ORDERS },
  { icon: MapPin, label: 'Addresses', href: '/profile/addresses' },
  { icon: Settings, label: 'Preferences', href: '/profile/preferences' },
]

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(ROUTES.LOGIN)
    }
  }, [status, router])

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
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Welcome back, {session.user?.name}
            </h1>
            <p className="text-foreground/60">Manage your account and orders</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <User className="text-primary h-8 w-8" />
                </div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  {session.user?.name}
                </h2>
                <p className="text-sm text-foreground/60 mb-6">
                  {session.user?.email}
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full mb-3"
                  onClick={() => router.push('/profile/settings')}
                >
                  Edit Profile
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full"
                  onClick={() => signOut()}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </Card>
            </motion.div>

            {/* Menu */}
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profileMenu.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      <Link href={item.href}>
                        <Card className="p-6 h-full cursor-pointer hover:bg-muted/50 transition-colors">
                          <Icon className="h-8 w-8 text-primary mb-3" />
                          <h3 className="font-semibold text-foreground">
                            {item.label}
                          </h3>
                        </Card>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
