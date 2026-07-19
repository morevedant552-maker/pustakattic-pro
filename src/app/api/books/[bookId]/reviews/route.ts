import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'

export async function POST(
  request: NextRequest,
  { params }: { params: { bookId: string } }
) {
  try {
    const session = await auth()
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const { title, content, rating } = await request.json()

    // Check if user has purchased this book
    const order = await prisma.order.findFirst({
      where: {
        userId: user.id,
        items: {
          some: {
            bookId: params.bookId,
          },
        },
      },
    })

    const review = await prisma.review.upsert({
      where: {
        bookId_userId: {
          bookId: params.bookId,
          userId: user.id,
        },
      },
      update: {
        title,
        content,
        rating,
        isVerified: !!order,
      },
      create: {
        bookId: params.bookId,
        userId: user.id,
        title,
        content,
        rating,
        isVerified: !!order,
      },
    })

    return NextResponse.json(review, { status: 201 })
  } catch (error) {
    console.error('Create review error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
