'use client';

import { ApolloProvider } from '@apollo/client';
import { CryptoProvider } from '@/context/CryptoContext';
import apolloClient from '@/lib/apollo';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={apolloClient}>
      <CryptoProvider>{children}</CryptoProvider>
    </ApolloProvider>
  );
}
