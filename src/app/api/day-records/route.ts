import { auth } from '@/auth';
import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const dayRecordSchema = z.object({
  day: z.string().datetime(),
  status: z.enum(['success', 'relapse']),
});

type RequestBody = z.infer<typeof dayRecordSchema>;

export async function GET(req: NextRequest) {
  // authentication
  const session = await auth();
  if (!session) return NextResponse.json({}, { status: 401 });

  // fetch all day record
  const dayRecords = await prisma.dayRecord.findMany({
    where: { userId: session.user?.id },
  });

  return NextResponse.json(dayRecords);
}

export async function POST(req: NextRequest) {
  // authentication
  const session = await auth();
  if (!session) return NextResponse.json({}, { status: 401 });

  // request body validation
  const body: RequestBody = await req.json();
  const validation = dayRecordSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const { day, status } = body;

  // create day record
  const dayRecord = await prisma.dayRecord.create({
    data: { day, status, userId: session.user?.id! },
  });

  return NextResponse.json(dayRecord);
}
