import { FoodPlate } from '../../models/food';
import api from './api';

export async function fetchFoods(): Promise<FoodPlate[]> {
  const request = await api.get<FoodPlate[]>('foods');

  return request.data;
}

export async function createFood(food: Omit<FoodPlate, 'id' | 'available'>): Promise<FoodPlate> {
  const request = await api.post<FoodPlate>('foods', food);

  return request.data;
}

export async function deleteFood(id: number): Promise<void> {
  await api.delete(`foods/${id}`);
}

interface SetAvailableParams {
  id: number;
  available: boolean;
}

export async function setAvailable({ available, id }: SetAvailableParams): Promise<void> {
  await api.patch(`foods/${id}`, { available });
}

export async function updateFood(
  id: number,
  data: Omit<FoodPlate, 'id' | 'available'>,
): Promise<FoodPlate> {
  const response = await api.put<FoodPlate>(`foods/${id}`, data);

  return response.data;
}
