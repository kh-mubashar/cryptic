import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';
import { CoinDetails } from '@/components/crypto/CoinDetails';

export default async function CoinPage({ params }: { params: { id: string } }) {
  const session = await getSession();

  if (!session) {
    redirect('/api/auth/login');
  }

  return <CoinDetails coinId={params.id} />;
}
