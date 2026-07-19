// Authentication Middleware

import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { UserRole } from '@prisma/client';

export async function getSession() {
  return auth();
}

export async function getCurrentUser() {
  const session = await getSession();
  if (!session?.user?.email) return null;

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
    },
  });

  return user;
}

export async function requireAuth() {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error('Unauthorized');
  }
  return user;
}

export async function requireAdmin() {
  const user = await requireAuth();
  if (user.role !== UserRole.ADMIN && user.role !== UserRole.MODERATOR) {
    throw new Error('Forbidden: Admin access required');
  }
  return user;
}

export async function requireRole(requiredRole: UserRole) {
  const user = await requireAuth();
  if (user.role !== requiredRole) {
    throw new Error(`Forbidden: ${requiredRole} role required`);
  }
  return user;
}

export function checkPermission(
  userRole: UserRole,
  requiredPermission: string
): boolean {
  const adminPermissions = {
    ADMIN: ['*'], // Full access
    MODERATOR: [
      'view_dashboard',
      'view_analytics',
      'view_books',
      'view_orders',
      'moderate_reviews',
      'view_reviews',
    ],
    USER: [],
  };

  const permissions = adminPermissions[userRole] || [];
  return permissions.includes('*') || permissions.includes(requiredPermission);
}
