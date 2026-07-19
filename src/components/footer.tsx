'use client'

import { motion } from 'framer-motion'
import { ROUTES } from '@/lib/constants'
import Link from 'next/link'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-xl">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div variants={item}>
            <h3 className="text-xl font-bold text-gradient mb-4">PUSTAKATTIC</h3>
            <p className="text-sm text-foreground/60">
              Your premium destination for discovering and collecting extraordinary
              books.
            </p>
          </motion.div>

          {/* Shop */}
          <motion.div variants={item}>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href={ROUTES.SHOP} className="hover:text-foreground transition">
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.CATEGORIES}
                  className="hover:text-foreground transition"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link href={ROUTES.AUTHORS} className="hover:text-foreground transition">
                  Authors
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Help */}
          <motion.div variants={item}>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="/contact" className="hover:text-foreground transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-foreground transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-foreground transition">
                  Terms
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={item}>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="/privacy" className="hover:text-foreground transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-foreground transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-foreground transition">
                  Cookies
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <motion.div
          variants={item}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60"
        >
          <p>&copy; 2024 PUSTAKATTIC PRO. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition">
              Twitter
            </a>
            <a href="#" className="hover:text-foreground transition">
              Instagram
            </a>
            <a href="#" className="hover:text-foreground transition">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
