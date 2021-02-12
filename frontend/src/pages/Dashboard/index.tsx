import { useCallback, useEffect, useMemo, useState } from 'react';
import { BiLoaderCircle } from 'react-icons/bi';

import FoodCard from '../../components/FoodCard';
import Header from '../../components/Header';
import AddFoodModal from '../../components/AddFoodModal';
import EditFoodModal from '../../components/EditFoodModal';

import { useFoodList } from '../../hooks/useFoodList';

import { Container, Content } from './styles';
import { LoadingState } from '../../context/FoodListContext';

function Dashboard() {
  const { foodList, editingFood, setEditingFood, loadingState, errorMessage } = useFoodList();

  const [isAddFoodModalOpen, setIsAddFoodModalOpen] = useState(false);
  const [isEditFoodModalOpen, setIsEditFoodModalOpen] = useState(false);

  const toggleAddFoodModal = useCallback(() => {
    setIsAddFoodModalOpen((prevState) => !prevState);
  }, []);

  const hideEditFoodModal = useCallback(() => {
    setEditingFood(null);
  }, [setEditingFood]);

  const onNewFoodAdded = useCallback(() => {
    setIsAddFoodModalOpen(false);
  }, []);

  useEffect(() => {
    setIsEditFoodModalOpen(editingFood !== null);
  }, [editingFood]);

  const loader = useMemo(() => {
    switch (loadingState) {
      case LoadingState.LOADING:
        return (
          <div className="Dashboard__loader">
            <BiLoaderCircle size={40} color="white" />
          </div>
        );

      case LoadingState.ERROR:
        return <p className="Dashboard__loader Dashboard__loader--error">{errorMessage}</p>;

      default:
        return null;
    }
  }, [loadingState, errorMessage]);

  return (
    <>
      <Header onClickNewPlate={toggleAddFoodModal} />

      <Container>
        {loader}
        <Content data-testid="foods-list">
          {foodList.map((food) => (
            <FoodCard key={food.id} product={food} />
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
        setIsOpen={hideEditFoodModal}
        editingFood={editingFood}
      />
    </>
  );
}

export default Dashboard;
