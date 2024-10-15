import { dayLogSchema } from '@/validationSchemas';
import { z } from 'zod';

type DayLogRequest = z.infer<typeof dayLogSchema>;

export default DayLogRequest;
