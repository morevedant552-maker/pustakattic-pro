'use client'

import { MainLayout } from '@/components/main-layout'
import { Button } from '@/components/button'
import Link from 'next/link'
import { ROUTES } from '@/lib/constants'

export default function NotFound() {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-foreground mb-2">Page Not Found</h2>
          <p className="text-foreground/60 mb-8 max-w-md">
            The page you're looking for seems to have gone missing. Let's get you back to discovering great books.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ROUTES.HOME}>
              <Button>Go Home</Button>
            </Link>
            <Link href={ROUTES.SHOP}>
              <Button variant="secondary">Browse Books</Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
