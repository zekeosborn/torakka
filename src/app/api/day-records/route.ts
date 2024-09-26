import { auth } from '@/auth';
import prisma from '@/prisma/client';
import type { DayRecordRequest } from '@/types';
import { dayRecordSchema } from '@/validationSchemas';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // authentication
  const session = await auth();
  if (!session) return NextResponse.json({}, { status: 401 });

  // get day records
  const dayRecords = await prisma.dayRecord.findMany({
    where: { userId: session.user?.id },
  });

  return NextResponse.json(dayRecords);
}

export async function POST(request: NextRequest) {
  // authentication
  const session = await auth();
  if (!session) return NextResponse.json({}, { status: 401 });

  // request body validation
  const body: DayRecordRequest = await request.json();
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
