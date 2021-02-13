export interface FoodPlate {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export type PartialFoodPlate = Omit<FoodPlate, 'id' | 'available'> & {
  available?: boolean;
};
