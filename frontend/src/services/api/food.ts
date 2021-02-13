import { FoodPlate, PartialFoodPlate } from '../../models/food';
import api from './api';

export async function fetchFoods(): Promise<FoodPlate[]> {
  const request = await api.get<FoodPlate[]>('foods');

  return request.data;
}

export async function createFood(food: PartialFoodPlate): Promise<FoodPlate> {
  const request = await api.post<FoodPlate>('foods', {
    ...food,
    available: true,
  });

  return request.data;
}

export async function deleteFood(id: number): Promise<void> {
  await api.delete(`foods/${id}`);
}

export async function toggleAvailable(id: number, available: boolean): Promise<FoodPlate> {
  const response = await api.patch<FoodPlate>(`foods/${id}`, { available });

  return response.data;
}

export async function updateFoodPlate(id: number, data: PartialFoodPlate): Promise<FoodPlate> {
  const response = await api.put<FoodPlate>(`foods/${id}`, data);

  return response.data;
}
