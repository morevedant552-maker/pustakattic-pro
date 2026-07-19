'use client'

import { useSession } from 'next-auth/react'
import { useCallback } from 'react'

export function useAuth() {
  const { data: session, status } = useSession()

  const isLoading = status === 'loading'
  const isAuthenticated = status === 'authenticated'
  const user = session?.user

  const isAdmin = useCallback(() => {
    // TODO: Implement when session includes role
    return false
  }, [])

  return {
    user,
    isLoading,
    isAuthenticated,
    isAdmin: isAdmin(),
  }
}
