import { useContext } from 'react';

import { FoodListContext } from '../context/FoodListContext';

export function useFoodList() {
  const contextValue = useContext(FoodListContext);

  if (contextValue === undefined) {
    throw new Error('useFoodList must be called inside a Provider with a value');
  }

  return contextValue;
}
