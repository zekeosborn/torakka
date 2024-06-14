import { dayRecordSchema } from '@/validationSchemas';
import { z } from 'zod';

export type DayRecordRequest = z.infer<typeof dayRecordSchema>;
