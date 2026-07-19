import { z } from 'zod'

// Auth Validators
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const registerSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

// Book Validators
export const bookSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z.number().positive('Price must be positive'),
  discount: z.number().min(0).max(100).default(0),
  stock: z.number().int().min(0).default(0),
  authorId: z.string().min(1, 'Author is required'),
  categoryIds: z.array(z.string()).optional(),
})

// Address Validators
export const addressSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Invalid phone number'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  postalCode: z.string().min(3, 'Postal code is required'),
  country: z.string().min(1, 'Country is required'),
})

// Review Validators
export const reviewSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  content: z.string().min(20, 'Review must be at least 20 characters'),
  rating: z.number().int().min(1).max(5),
})

// Cart Validators
export const cartItemSchema = z.object({
  bookId: z.string().min(1),
  quantity: z.number().int().min(1).max(100),
})

export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>
export type BookInput = z.infer<typeof bookSchema>
export type AddressInput = z.infer<typeof addressSchema>
export type ReviewInput = z.infer<typeof reviewSchema>
export type CartItemInput = z.infer<typeof cartItemSchema>
