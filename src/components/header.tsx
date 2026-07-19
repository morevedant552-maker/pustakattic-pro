'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ROUTES } from '@/lib/constants'
import { MobileNav } from './mobile-nav'
import { ThemeToggle } from './theme-toggle'
import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Shop', href: ROUTES.SHOP },
  { label: 'Categories', href: ROUTES.CATEGORIES },
  { label: 'Authors', href: ROUTES.AUTHORS },
  { label: 'About', href: '/about' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-dark' : 'bg-background/50 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href={ROUTES.HOME}
              className="text-xl font-bold text-gradient"
            >
              PUSTAKATTIC
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ThemeToggle />
            <Link
              href={ROUTES.LOGIN}
              className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
            >
              Sign In
            </Link>
            <Link
              href={ROUTES.CART}
              className="premium-button-primary text-sm"
            >
              Cart
            </Link>
            <MobileNav navItems={navItems} />
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
