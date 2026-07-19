// User Types
export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
}

export interface User {
  id: string
  name: string | null
  email: string
  image: string | null
  role: UserRole
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

// Book Types
export interface Book {
  id: string
  isbn: string | null
  title: string
  slug: string
  description: string
  summary: string | null
  coverImage: string | null
  pageCount: number | null
  publishedDate: Date | null
  language: string
  price: number
  discount: number
  stock: number
  authorId: string
  author?: Author
  categories?: Category[]
  images?: BookImage[]
  averageRating: number
  totalReviews: number
  totalSales: number
  isActive: boolean
  isFeatured: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Author {
  id: string
  name: string
  slug: string
  bio: string | null
  image: string | null
  birthDate: Date | null
  nationality: string | null
  website: string | null
  createdAt: Date
  updatedAt: Date
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  image: string | null
  icon: string | null
  createdAt: Date
  updatedAt: Date
}

export interface BookImage {
  id: string
  bookId: string
  image: string
  altText: string | null
  isPrimary: boolean
  displayOrder: number
  createdAt: Date
}

// Review & Rating Types
export interface Review {
  id: string
  bookId: string
  userId: string
  title: string
  content: string
  rating: number
  helpfulCount: number
  isVerified: boolean
  isApproved: boolean
  createdAt: Date
  updatedAt: Date
  user?: User
}

export interface Rating {
  id: string
  bookId: string
  userId: string
  score: number
  createdAt: Date
  updatedAt: Date
}

// Wishlist Types
export interface WishlistItem {
  id: string
  userId: string
  bookId: string
  book?: Book
  createdAt: Date
}

// Cart Types
export interface CartItem {
  id: string
  userId: string
  bookId: string
  quantity: number
  book?: Book
  createdAt: Date
  updatedAt: Date
}

// Order Types
export enum OrderStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
  RETURNED = 'RETURNED',
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
}

export interface Order {
  id: string
  orderNumber: string
  userId: string
  items?: OrderItem[]
  subtotal: number
  shippingCost: number
  tax: number
  discount: number
  total: number
  paymentId: string | null
  paymentStatus: PaymentStatus
  paymentMethod: string | null
  status: OrderStatus
  trackingNumber: string | null
  notes: string | null
  couponId: string | null
  createdAt: Date
  updatedAt: Date
}

export interface OrderItem {
  id: string
  orderId: string
  bookId: string
  quantity: number
  priceAtPurchase: number
  discount: number
  book?: Book
}

// Address Types
export enum AddressType {
  SHIPPING = 'SHIPPING',
  BILLING = 'BILLING',
  BOTH = 'BOTH',
}

export interface Address {
  id: string
  userId: string
  type: AddressType
  firstName: string
  lastName: string
  phone: string
  email: string
  address: string
  city: string
  state: string
  postalCode: string
  country: string
  isDefault: boolean
  createdAt: Date
  updatedAt: Date
}

// Coupon Types
export enum DiscountType {
  PERCENTAGE = 'PERCENTAGE',
  FIXED = 'FIXED',
}

export interface Coupon {
  id: string
  code: string
  description: string | null
  discountType: DiscountType
  discountValue: number
  minOrderAmount: number | null
  maxUsageCount: number | null
  usageCount: number
  startDate: Date
  endDate: Date
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

// Notification Types
export enum NotificationType {
  ORDER_CONFIRMED = 'ORDER_CONFIRMED',
  ORDER_SHIPPED = 'ORDER_SHIPPED',
  ORDER_DELIVERED = 'ORDER_DELIVERED',
  REVIEW_RESPONSE = 'REVIEW_RESPONSE',
  WISHLIST_ITEM_BACK_IN_STOCK = 'WISHLIST_ITEM_BACK_IN_STOCK',
  NEW_RELEASE_IN_CATEGORY = 'NEW_RELEASE_IN_CATEGORY',
}

export interface Notification {
  id: string
  userId: string
  type: NotificationType
  title: string
  message: string
  data: string | null
  isRead: boolean
  createdAt: Date
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}
