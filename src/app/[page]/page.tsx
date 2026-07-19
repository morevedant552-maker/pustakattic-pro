'use client'

import { motion } from 'framer-motion'
import { MainLayout } from '@/components/main-layout'
import Link from 'next/link'
import { ROUTES } from '@/lib/constants'
import { Button } from '@/components/button'

const pages = [
  {
    slug: 'about',
    title: 'About PUSTAKATTIC',
    sections: [
      {
        heading: 'Our Story',
        content:
          'PUSTAKATTIC PRO was founded with a simple belief: that reading should be a premium experience. In a world of infinite digital distractions, we created a sanctuary for book lovers—a place where quality, curation, and passion for literature converge.',
      },
      {
        heading: 'Our Mission',
        content:
          'We believe books are more than just products to be sold. They are gateways to new worlds, sources of wisdom, and connections between souls across time. Our mission is to make discovering your next favorite book feel effortless and magical.',
      },
      {
        heading: 'Our Values',
        content:
          'Quality over quantity. We carefully curate every book in our collection. Author-first approach. We celebrate and support writers. Community. We believe books connect us. Excellence. In everything we do.',
      },
    ],
  },
  {
    slug: 'contact',
    title: 'Contact Us',
    sections: [
      {
        heading: 'Get in Touch',
        content:
          'Have a question, suggestion, or just want to say hello? We\'d love to hear from you. Email us at hello@pustakattic.com or fill out the form below.',
      },
    ],
  },
  {
    slug: 'faq',
    title: 'Frequently Asked Questions',
    sections: [
      {
        heading: 'Shipping & Delivery',
        content: 'We offer worldwide shipping with various options. Orders typically ship within 2-3 business days.',
      },
      {
        heading: 'Returns & Refunds',
        content: 'We accept returns within 30 days of purchase for a full refund. Books must be in original condition.',
      },
      {
        heading: 'Book Recommendations',
        content:
          'Our AI-powered recommendation engine learns from your reading preferences to suggest books you\'ll love.',
      },
    ],
  },
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    sections: [
      {
        heading: 'Data Protection',
        content:
          'We take your privacy seriously. All personal information is encrypted and protected according to international standards.',
      },
      {
        heading: 'Cookie Policy',
        content:
          'We use cookies to enhance your browsing experience. You can disable cookies in your browser settings if you prefer.',
      },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms of Service',
    sections: [
      {
        heading: 'User Responsibilities',
        content:
          'By using PUSTAKATTIC PRO, you agree to respect intellectual property rights and use the service lawfully.',
      },
      {
        heading: 'Limitation of Liability',
        content:
          'PUSTAKATTIC PRO is provided "as is". We are not liable for indirect damages or lost profits.',
      },
    ],
  },
]

interface PageProps {
  params: {
    page: string
  }
}

export async function generateStaticParams() {
  return pages.map((page) => ({
    page: page.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const page = pages.find((p) => p.slug === params.page)
  return {
    title: `${page?.title} | PUSTAKATTIC PRO`,
  }
}

export default function StaticPage({ params }: PageProps) {
  const page = pages.find((p) => p.slug === params.page)

  if (!page) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">Page not found</div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
          <motion.div
            className="mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
              {page.title}
            </h1>
            <Link href={ROUTES.HOME}>
              <a className="text-foreground/60 hover:text-foreground transition">← Back to Home</a>
            </Link>
          </motion.div>
        </section>

        {/* Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-4xl prose prose-invert max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {page.sections.map((section, index) => (
              <motion.div
                key={index}
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {section.heading}
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </MainLayout>
  )
}
