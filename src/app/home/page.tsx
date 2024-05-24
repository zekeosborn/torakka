import { auth } from '@/auth';
import { Tracker } from '@/components';
import prisma from '@/prisma/client';
import { redirect } from 'next/navigation';
import NavBar from './NavBar';

async function HomePage() {
  const session = await auth();

  if (!session) return redirect('/');

  const user = await prisma.user.findUnique({
    where: { id: session.user?.id },
    include: { dayRecords: true },
  });

  return (
    <>
      <NavBar />
      <main className="px-6">
        <Tracker
          dayRecords={user?.dayRecords}
          className="mb-8 mt-[calc(((100dvh-400px)/2)-80px)] tracker:mx-auto"
        />
      </main>
    </>
  );
}

export default HomePage;
