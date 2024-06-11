import { auth } from '@/auth';
import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({}, { status: 401 });

  const dayRecords = await prisma.dayRecord.findMany({
    where: { userId: session.user?.id },
  });

  return NextResponse.json(dayRecords);
}
