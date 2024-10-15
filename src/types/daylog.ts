import type { DayLog as PrismaDayLog } from '@prisma/client';

type DayLog = Omit<PrismaDayLog, 'day'> & { day: string };

export default DayLog;
