'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading, error } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // Allow access to dashboard even if not logged in
      if (!user && pathname !== '/dashboard') {
        router.push('/api/auth/login');
      }
      setAuthChecked(true);
    }
  }, [user, isLoading, router, pathname]);

  if (error) {
    return (
      <ErrorMessage
        title="Authentication Error"
        message="There was a problem with authentication. Please try again."
        action={{
          label: 'Try Again',
          onClick: () => router.refresh(),
        }}
      />
    );
  }

  if (isLoading || !authChecked) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
}
