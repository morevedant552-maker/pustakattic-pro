import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'

export async function POST(request: NextRequest) {
  try {
    const { code, orderValue } = await request.json()

    const coupon = await prisma.coupon.findUnique({
      where: { code },
    })

    if (!coupon) {
      return NextResponse.json({ error: 'Coupon not found' }, { status: 404 })
    }

    if (!coupon.isActive) {
      return NextResponse.json(
        { error: 'Coupon is not active' },
        { status: 400 }
      )
    }

    const now = new Date()
    if (now < coupon.startDate || now > coupon.endDate) {
      return NextResponse.json(
        { error: 'Coupon is expired' },
        { status: 400 }
      )
    }

    if (coupon.maxUsageCount && coupon.usageCount >= coupon.maxUsageCount) {
      return NextResponse.json(
        { error: 'Coupon usage limit reached' },
        { status: 400 }
      )
    }

    if (coupon.minOrderAmount && orderValue < coupon.minOrderAmount) {
      return NextResponse.json(
        {
          error: `Minimum order amount is ${coupon.minOrderAmount}`,
        },
        { status: 400 }
      )
    }

    let discount = 0
    if (coupon.discountType === 'PERCENTAGE') {
      discount = (orderValue * coupon.discountValue) / 100
    } else {
      discount = coupon.discountValue
    }

    return NextResponse.json({
      coupon,
      discount,
    })
  } catch (error) {
    console.error('Validate coupon error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
