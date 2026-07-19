// Admin & Business Management Types

export enum AdminPermission {
  // Dashboard
  VIEW_DASHBOARD = 'view_dashboard',
  VIEW_ANALYTICS = 'view_analytics',
  
  // Books
  MANAGE_BOOKS = 'manage_books',
  VIEW_BOOKS = 'view_books',
  
  // Authors
  MANAGE_AUTHORS = 'manage_authors',
  VIEW_AUTHORS = 'view_authors',
  
  // Publishers
  MANAGE_PUBLISHERS = 'manage_publishers',
  VIEW_PUBLISHERS = 'view_publishers',
  
  // Suppliers
  MANAGE_SUPPLIERS = 'manage_suppliers',
  VIEW_SUPPLIERS = 'view_suppliers',
  
  // Categories
  MANAGE_CATEGORIES = 'manage_categories',
  VIEW_CATEGORIES = 'view_categories',
  
  // Inventory
  MANAGE_INVENTORY = 'manage_inventory',
  VIEW_INVENTORY = 'view_inventory',
  
  // Orders
  MANAGE_ORDERS = 'manage_orders',
  VIEW_ORDERS = 'view_orders',
  
  // Users
  MANAGE_USERS = 'manage_users',
  VIEW_USERS = 'view_users',
  
  // Reviews
  MODERATE_REVIEWS = 'moderate_reviews',
  VIEW_REVIEWS = 'view_reviews',
  
  // Promotions
  MANAGE_PROMOTIONS = 'manage_promotions',
  VIEW_PROMOTIONS = 'view_promotions',
  
  // Reports
  VIEW_REPORTS = 'view_reports',
}

export interface AdminRole {
  id: string;
  name: string;
  description: string;
  permissions: AdminPermission[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminUser {
  id: string;
  userId: string;
  roleId: string;
  role?: AdminRole;
  lastLoginAt?: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Dashboard Analytics
export interface DashboardOverview {
  totalRevenue: number;
  totalOrders: number;
  totalBooks: number;
  totalUsers: number;
  thisMonthRevenue: number;
  thisMonthOrders: number;
  revenueGrowth: number;
  ordersGrowth: number;
}

export interface SalesData {
  date: string;
  revenue: number;
  orders: number;
  averageOrderValue: number;
}

export interface TopSellingBook {
  id: string;
  title: string;
  sales: number;
  revenue: number;
  stock: number;
}

export interface RecentOrder {
  id: string;
  orderNumber: string;
  userId: string;
  userName: string;
  userEmail: string;
  total: number;
  status: string;
  createdAt: Date;
}

// Inventory Management
export interface InventoryStatus {
  bookId: string;
  title: string;
  currentStock: number;
  lowStockThreshold: number;
  reorderQuantity: number;
  isLowStock: boolean;
  lastRestocked: Date;
}

export interface StockHistory {
  id: string;
  bookId: string;
  action: 'IN' | 'OUT' | 'ADJUSTMENT';
  quantity: number;
  reason: string;
  notes?: string;
  createdBy: string;
  createdAt: Date;
}

// Supplier Management
export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  contactPerson: string;
  paymentTerms: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface PurchaseOrder {
  id: string;
  poNumber: string;
  supplierId: string;
  supplier?: Supplier;
  items: PurchaseOrderItem[];
  totalAmount: number;
  tax: number;
  shippingCost: number;
  grandTotal: number;
  status: 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'RECEIVED' | 'CANCELLED';
  expectedDeliveryDate: Date;
  actualDeliveryDate?: Date;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PurchaseOrderItem {
  id: string;
  purchaseOrderId: string;
  bookId: string;
  bookTitle: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

// Activity Logging
export interface ActivityLog {
  id: string;
  adminId: string;
  adminEmail: string;
  action: string;
  entity: string;
  entityId: string;
  changes?: Record<string, unknown>;
  ipAddress: string;
  userAgent: string;
  createdAt: Date;
}

export enum ActivityAction {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  APPROVE = 'APPROVE',
  REJECT = 'REJECT',
  PUBLISH = 'PUBLISH',
  UNPUBLISH = 'UNPUBLISH',
  VIEW = 'VIEW',
  EXPORT = 'EXPORT',
}
