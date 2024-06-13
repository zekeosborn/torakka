import { auth } from '@/auth';
import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  // authentication
  const session = await auth();
  if (!session) return NextResponse.json({}, { status: 401 });

  // day record validation
  const dayRecord = await prisma.dayRecord.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!dayRecord)
    return NextResponse.json({ error: 'Invalid id' }, { status: 404 });

  // delete day record
  await prisma.dayRecord.delete({
    where: { id: dayRecord.id },
  });

  return NextResponse.json({});
}
