'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

import { Icon } from '@/components/ui/Icon';

export default function Header() {
  const { user, isLoading } = useUser();

  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm lg:pl-64">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center">
          <div className="lg:hidden">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">Cryptic</span>
            </Link>
          </div>
          <div className="flex max-w-2xl items-center px-4">
            <div className="w-full">
              <label htmlFor="search" className="sr-only">
                Search coins
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Icon name="search" className="text-gray-400" />
                </div>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Search cryptocurrencies..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-4 lg:gap-x-6">
          {/* Notification button removed - will be implemented later */}
          {isLoading ? (
            <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />
          ) : user ? (
            <div className="flex items-center gap-x-4">
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <span className="text-sm font-medium text-gray-900">
                  {user.name}
                </span>
                <span className="text-xs text-gray-600">{user.email}</span>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-medium text-white">
                {user.name?.charAt(0) || 'U'}
              </div>
            </div>
          ) : (
            <Link
              href="/api/auth/login"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
