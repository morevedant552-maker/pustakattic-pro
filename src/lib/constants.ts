// Routes
export const ROUTES = {
  HOME: '/',
  SHOP: '/shop',
  CATEGORIES: '/categories',
  AUTHORS: '/authors',
  SEARCH: '/search',
  WISHLIST: '/wishlist',
  CART: '/cart',
  CHECKOUT: '/checkout',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  PROFILE: '/profile',
  ORDERS: '/orders',
  SETTINGS: '/settings',
  ADMIN: '/admin',
  ADMIN_BOOKS: '/admin/books',
  ADMIN_CATEGORIES: '/admin/categories',
  ADMIN_AUTHORS: '/admin/authors',
  ADMIN_USERS: '/admin/users',
  ADMIN_ORDERS: '/admin/orders',
  ADMIN_ANALYTICS: '/admin/analytics',
} as const

// Pagination
export const PAGINATION = {
  DEFAULT_LIMIT: 12,
  MAX_LIMIT: 100,
} as const

// Cache
export const CACHE_TAGS = {
  BOOKS: 'books',
  CATEGORIES: 'categories',
  AUTHORS: 'authors',
  ORDERS: 'orders',
  USERS: 'users',
} as const

// Categories
export const BOOK_CATEGORIES = [
  { id: 'fiction', name: 'Fiction', icon: 'BookOpen' },
  { id: 'fantasy', name: 'Fantasy', icon: 'Wand2' },
  { id: 'sci-fi', name: 'Science Fiction', icon: 'Rocket' },
  { id: 'mystery', name: 'Mystery', icon: 'Search' },
  { id: 'thriller', name: 'Thriller', icon: 'Zap' },
  { id: 'romance', name: 'Romance', icon: 'Heart' },
  { id: 'horror', name: 'Horror', icon: 'Skull' },
  { id: 'business', name: 'Business', icon: 'TrendingUp' },
  { id: 'finance', name: 'Finance', icon: 'DollarSign' },
  { id: 'psychology', name: 'Psychology', icon: 'Brain' },
  { id: 'self-help', name: 'Self-Help', icon: 'Lightbulb' },
  { id: 'programming', name: 'Programming', icon: 'Code' },
  { id: 'technology', name: 'Technology', icon: 'Cpu' },
  { id: 'biography', name: 'Biography', icon: 'User' },
  { id: 'history', name: 'History', icon: 'Clock' },
  { id: 'academic', name: 'Academic', icon: 'BookMarked' },
] as const

// Animations
export const ANIMATION_DURATION = {
  FAST: 0.2,
  NORMAL: 0.3,
  SLOW: 0.5,
} as const

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
} as const
