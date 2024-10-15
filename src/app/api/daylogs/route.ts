import { auth } from '@/auth';
import prisma from '@/prisma/client';
import type DayLogRequest from '@/types/daylog-request';
import { dayLogSchema } from '@/validationSchemas';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // authentication
    const session = await auth();
    if (!session)
      return NextResponse.json(
        { error: 'You must sign in to access day logs.' },
        { status: 401 },
      );

    // retrieve day logs
    const dayLogs = await prisma.dayLog.findMany({
      where: { userId: session.user?.id },
    });

    return NextResponse.json(dayLogs);
  } catch (error) {
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // authentication
    const session = await auth();
    if (!session)
      return NextResponse.json(
        { error: 'You must sign in to create a day log.' },
        { status: 401 },
      );

    // request body validation
    const body: DayLogRequest = await request.json();
    const validation = dayLogSchema.safeParse(body);

    if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 });

    const { day, status } = body;

    // create day log
    const dayLog = await prisma.dayLog.create({
      data: { userId: session.user?.id!, day, status },
    });

    return NextResponse.json(dayLog);
  } catch (error) {
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 },
    );
  }
}
