import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { OrderStatus, PaymentStatus } from '@/types'

export async function GET(request: NextRequest) {
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

    const orders = await prisma.order.findMany({
      where: { userId: user.id },
      include: {
        items: {
          include: {
            book: true,
          },
        },
        coupon: true,
      },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(orders)
  } catch (error) {
    console.error('Get orders error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
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

    const {
      items,
      subtotal,
      shippingCost,
      tax,
      discount,
      total,
      shippingAddressId,
      billingAddressId,
      couponId,
    } = await request.json()

    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    const order = await prisma.order.create({
      data: {
        orderNumber,
        userId: user.id,
        items: {
          create: items.map((item: any) => ({
            bookId: item.bookId,
            quantity: item.quantity,
            priceAtPurchase: item.priceAtPurchase,
            discount: item.discount,
          })),
        },
        subtotal,
        shippingCost,
        tax,
        discount,
        total,
        shippingAddressId,
        billingAddressId,
        couponId,
        status: 'PENDING',
        paymentStatus: 'PENDING',
      },
      include: {
        items: {
          include: {
            book: true,
          },
        },
      },
    })

    return NextResponse.json(order, { status: 201 })
  } catch (error) {
    console.error('Create order error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
