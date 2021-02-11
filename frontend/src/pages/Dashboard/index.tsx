import { useCallback, useEffect, useMemo, useState } from 'react';
import { BiLoaderCircle } from 'react-icons/bi';

import { Container, Content } from './styles';

import FoodCard from '../../components/FoodCard';
import { deleteFood, fetchFoods } from '../../services/api/food';
import { FoodPlate } from '../../models/food';
import Header from '../../components/Header';
import AddFoodModal from '../../components/AddFoodModal';
import EditFoodModal from '../../components/EditFoodModal';

enum LoadingState {
  LOADING,
  LOADED,
  ERROR,
}

function Dashboard() {
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.LOADING);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [foods, setFoods] = useState<FoodPlate[]>([]);
  const [editingFood, setEditingFood] = useState<FoodPlate | null>(null);
  const [isAddFoodModalOpen, setIsAddFoodModalOpen] = useState(false);
  const [isEditFoodModalOpen, setIsEditFoodModalOpen] = useState(false);

  const toggleAddFoodModal = useCallback(() => {
    setIsAddFoodModalOpen((prevState) => !prevState);
  }, []);

  const toggleEditFoodModal = useCallback(() => {
    setIsEditFoodModalOpen((prevState) => !prevState);
  }, []);

  const onNewFoodAdded = useCallback((newFood: FoodPlate) => {
    setFoods((prevState) => [...prevState, newFood]);

    setIsAddFoodModalOpen(false);
  }, []);

  const onFoodEdited = useCallback((updatedFood: FoodPlate) => {
    setFoods((prevState) =>
      prevState.map((food) => (food.id === updatedFood.id ? updatedFood : food)),
    );

    setIsEditFoodModalOpen(false);
  }, []);

  const handleOnEdit = useCallback((food: FoodPlate) => {
    setIsEditFoodModalOpen((prevState) => !prevState);

    setEditingFood(food);
  }, []);

  const handleOnDelete = useCallback(async (id: number) => {
    await deleteFood(id);

    setFoods((prevState) => prevState.filter((food) => food.id !== id));
  }, []);

  const loadFoods = useCallback(async () => {
    try {
      const apiFoods = await fetchFoods();

      setFoods(apiFoods);
      setLoadingState(LoadingState.LOADED);
    } catch (err) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      }

      setLoadingState(LoadingState.ERROR);
    }
  }, []);

  const loader = useMemo(() => {
    switch (loadingState) {
      case LoadingState.LOADING:
        return (
          <div className="Dashboard__loader">
            <BiLoaderCircle size={40} color="white" />
          </div>
        );

      case LoadingState.ERROR:
        return <p className="Dashboard__loader--error">{errorMessage}</p>;

      default:
        return null;
    }
  }, [loadingState, errorMessage]);

  useEffect(() => {
    loadFoods().catch(console.log);
  }, [loadFoods]);

  return (
    <>
      <Header onClickNewPlate={toggleAddFoodModal} />

      <Container>
        {loader}
        <Content data-testid="foods-list">
          {foods.map((food) => (
            <FoodCard
              key={food.id}
              product={food}
              onEdit={handleOnEdit}
              onDelete={handleOnDelete}
            />
          ))}
        </Content>
      </Container>

      <AddFoodModal
        isOpen={isAddFoodModalOpen}
        setIsOpen={toggleAddFoodModal}
        onNewFoodAdded={onNewFoodAdded}
      />

      <EditFoodModal
        isOpen={isEditFoodModalOpen}
        setIsOpen={toggleEditFoodModal}
        editingFood={editingFood}
        onFoodEdited={onFoodEdited}
      />
    </>
  );
}

export default Dashboard;
