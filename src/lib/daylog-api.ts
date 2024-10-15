import type DayLog from '@/types/daylog';
import type DayLogRequest from '@/types/daylog-request';
import axios from 'axios';

const dayLogApi = axios.create({
  baseURL: '/api/daylogs',
});

export async function getDayLogs() {
  const res = await dayLogApi.get<DayLog[]>('');
  return res.data;
}

export async function addDayLog(data: DayLogRequest) {
  const res = await dayLogApi.post<DayLog>('', data);
  return res.data;
}

export async function deleteDayLog(id: number) {
  await dayLogApi.delete(`/${id}`);
}
