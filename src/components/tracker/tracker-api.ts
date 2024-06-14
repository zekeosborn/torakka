import type { DayRecord, DayRecordRequest } from '@/types';
import axios from 'axios';

const dayRecordAPI = axios.create({
  baseURL: '/api/day-records',
});

export async function getDayRecords() {
  const res = await dayRecordAPI.get<DayRecord[]>('');
  const dayRecords = res.data;
  return dayRecords;
}

export async function addDayRecord(data: DayRecordRequest) {
  const res = await dayRecordAPI.post<DayRecord>('', data);
  const dayRecord = res.data;
  return dayRecord;
}

export async function deleteDayRecord(id: number) {
  await dayRecordAPI.delete(`/${id}`);
}
