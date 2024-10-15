import { z } from 'zod';

export const dayLogSchema = z.object({
  day: z.string().datetime(),
  status: z.enum(['success', 'relapse']),
});
