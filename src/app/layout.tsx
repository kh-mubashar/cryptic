import type { Metadata } from 'next';
import { Providers } from '@/components/providers/Providers';
import { AuthProvider } from '@/components/auth/AuthProvider';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cryptic - Crypto Dashboard',
  description: 'Real-time cryptocurrency tracking dashboard',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full antialiased">
        <AuthProvider>
          <Providers>
            <div className="min-h-full">
              <Sidebar />
              <div className="lg:pl-64">
                <Header />
                <main className="py-8">
                  <div className="px-4 sm:px-6 lg:px-8">{children}</div>
                </main>
              </div>
            </div>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
