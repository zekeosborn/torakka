import { type DayRecord } from '@prisma/client';
import axios from 'axios';

const dayRecordAPI = axios.create({
  baseURL: '/api/day-records',
});

export async function getDayRecords() {
  const res = await dayRecordAPI.get<DayRecord[]>('');

  const dayRecords = res.data.map((dayRecord) => ({
    ...dayRecord,
    day: new Date(dayRecord.day),
  }));

  return dayRecords;
}
