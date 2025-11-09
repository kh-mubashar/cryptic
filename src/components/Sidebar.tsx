'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Avatar } from '@/components/ui/Avatar';

interface NavItem {
  name: string;
  href: string;
  icon: string;
}

const navigation: NavItem[] = [
  { name: 'Dashboard', href: '/', icon: '📊' },
  { name: 'Markets', href: '/markets', icon: '📈' },
  { name: 'Portfolio', href: '/portfolio', icon: '💼' },
  { name: 'Alerts', href: '/alerts', icon: '🔔' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useUser();

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex flex-grow flex-col border-r border-gray-200 bg-white">
        <div className="flex h-16 flex-shrink-0 items-center bg-indigo-600 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">Cryptic</span>
          </Link>
        </div>
        <div className="flex flex-grow flex-col overflow-y-auto pb-4 pt-5">
          <nav className="mt-5 flex-1 space-y-1 px-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              );
            })}
          </nav>
          {user && (
            <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
              <div className="flex w-full items-center">
                <div className="h-8 w-8 flex-shrink-0">
                  <Avatar src={user.picture} name={user.name} size={32} />
                </div>
                <div className="ml-3 w-full">
                  <p className="truncate text-sm font-medium text-gray-700">
                    {user.name}
                  </p>
                  <Link
                    href="/api/auth/logout"
                    className="text-xs font-medium text-gray-500 hover:text-gray-700"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
