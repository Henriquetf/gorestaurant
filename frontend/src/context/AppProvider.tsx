import { ReactNode } from 'react';

import { FoodListProvider } from './FoodListContext';

export default function AppProvider({ children }: { children: ReactNode }) {
  return <FoodListProvider>{children}</FoodListProvider>;
}
