import { auth } from '@/auth';
import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

interface DeleteRequestContext {
  params: { id: string };
}

export async function DELETE(
  request: NextRequest,
  { params }: DeleteRequestContext,
) {
  // authentication
  const session = await auth();
  if (!session)
    return NextResponse.json(
      { error: 'You must sign in to perform this action.' },
      { status: 401 },
    );

  // verify day log existence
  const dayLog = await prisma.dayLog.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!dayLog)
    return NextResponse.json(
      { error: `No day log with ID ${params.id} was found.` },
      { status: 404 },
    );

  // authorization
  if (session.user?.id !== dayLog.userId)
    return NextResponse.json(
      { error: "You don't have permission to delete this day log." },
      { status: 403 },
    );

  // delete day log
  await prisma.dayLog.delete({
    where: { id: dayLog.id },
  });

  return NextResponse.json({
    message: `Day log ${params.id} has been successfully deleted.`,
  });
}
