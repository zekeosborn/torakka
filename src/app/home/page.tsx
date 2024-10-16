import { auth } from '@/auth';
import Tracker from '@/features/tracker/Tracker';
import { redirect } from 'next/navigation';
import Header from './Header';

export default async function Home() {
  const session = await auth();

  if (!session) return redirect('/');

  return (
    <>
      <Header />

      <main className="px-6">
        <Tracker className="mx-auto mb-10 mt-5 tall:mb-0 tall:mt-[calc(((100dvh-400px)/2)-80px)]" />
      </main>
    </>
  );
}
