import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Header from './Header';

export default async function Home() {
  const session = await auth();

  if (!session) return redirect('/');

  return <Header />;
}
