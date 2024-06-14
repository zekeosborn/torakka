import { z } from 'zod';

export const dayRecordSchema = z.object({
  day: z.string().datetime(),
  status: z.enum(['success', 'relapse']),
});
