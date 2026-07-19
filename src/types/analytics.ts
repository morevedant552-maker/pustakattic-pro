// Analytics Types

export interface RevenueAnalytics {
  period: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
  data: Array<{
    date: string;
    revenue: number;
    orders: number;
    customers: number;
    averageOrderValue: number;
  }>;
}

export interface ProductAnalytics {
  bookId: string;
  title: string;
  totalSales: number;
  totalRevenue: number;
  averageRating: number;
  reviews: number;
  outOfStock: boolean;
}

export interface CustomerAnalytics {
  totalCustomers: number;
  activeCustomers: number;
  inactiveCustomers: number;
  newCustomersThisMonth: number;
  repeatCustomerRate: number;
  averageCustomerLifetimeValue: number;
}

export interface OrderAnalytics {
  totalOrders: number;
  completedOrders: number;
  pendingOrders: number;
  cancelledOrders: number;
  averageOrderValue: number;
  averageProcessingTime: number;
}

export interface InventoryAnalytics {
  totalBooks: number;
  lowStockBooks: number;
  outOfStockBooks: number;
  overStockBooks: number;
  totalUnitsInStock: number;
  inventoryTurnover: number;
}

export interface CategoryPerformance {
  categoryId: string;
  categoryName: string;
  totalBooks: number;
  totalSales: number;
  totalRevenue: number;
  averagePrice: number;
  topBook: {
    id: string;
    title: string;
    sales: number;
  };
}

export interface AuthorPerformance {
  authorId: string;
  authorName: string;
  totalBooks: number;
  totalSales: number;
  totalRevenue: number;
  averageRating: number;
}

export interface PromotionAnalytics {
  couponCode: string;
  usageCount: number;
  totalDiscount: number;
  generatedRevenue: number;
  conversionRate: number;
  startDate: Date;
  endDate: Date;
}
