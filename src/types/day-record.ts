import { DayRecord as PrismaDayRecord } from '@prisma/client';
export type DayRecord = Omit<PrismaDayRecord, 'day'> & { day: string };
