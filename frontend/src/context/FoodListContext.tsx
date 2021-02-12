import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';

import { FoodPlate, PartialFoodPlate } from '../models/food';

import {
  createFood,
  deleteFood,
  fetchFoods,
  toggleAvailable,
  updateFoodPlate,
} from '../services/api/food';

export enum LoadingState {
  LOADING,
  LOADED,
  ERROR,
}

interface FoodListProviderProps {
  foodList: FoodPlate[];
  editingFood: FoodPlate | null;
  loadingState: LoadingState;
  errorMessage: string | null;
  addFood: (food: PartialFoodPlate) => Promise<FoodPlate>;
  removeFood: (id: FoodPlate['id']) => Promise<void>;
  updateFood: (id: FoodPlate['id'], data: PartialFoodPlate) => Promise<FoodPlate>;
  setAvailable: (id: FoodPlate['id'], available: boolean) => Promise<void>;
  setEditingFood: (food: FoodPlate | null) => void;
}

export const FoodListContext = createContext<FoodListProviderProps>({} as FoodListProviderProps);

export function FoodListProvider({ children }: { children: ReactNode }) {
  const [foodList, setFoodList] = useState<FoodPlate[]>([]);
  const [editingFood, setEditingFood] = useState<FoodPlate | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.LOADING);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const addFood = useCallback(async (food: PartialFoodPlate) => {
    const newFood = await createFood(food);

    setFoodList((prevState) => [...prevState, newFood]);

    return newFood;
  }, []);

  const removeFood = useCallback(async (id: number) => {
    await deleteFood(id);

    setFoodList((prevState) => prevState.filter((food) => food.id !== id));
  }, []);

  const updateFood = useCallback(async (id: number, data: PartialFoodPlate) => {
    const updatedFood = await updateFoodPlate(id, data);

    setFoodList((prevState) => prevState.map((food) => (food.id === id ? updatedFood : food)));

    return updatedFood;
  }, []);

  const setAvailable = useCallback(async (id: number, available: boolean) => {
    const updatedFood = await toggleAvailable(id, available);

    setFoodList((prevState) => prevState.map((food) => (food.id === id ? updatedFood : food)));
  }, []);

  const loadFoods = useCallback(async () => {
    try {
      const apiFoods = await fetchFoods();

      setFoodList(apiFoods);
      setLoadingState(LoadingState.LOADED);
    } catch (err) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      }

      setLoadingState(LoadingState.ERROR);
    }
  }, []);

  useEffect(() => {
    loadFoods().catch(console.log);
  }, [loadFoods]);

  return (
    <FoodListContext.Provider
      value={{
        foodList,
        addFood,
        removeFood,
        updateFood,
        setAvailable,
        editingFood,
        setEditingFood,
        loadingState,
        errorMessage,
      }}
    >
      {children}
    </FoodListContext.Provider>
  );
}
