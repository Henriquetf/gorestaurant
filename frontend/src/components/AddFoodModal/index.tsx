import { useForm } from 'react-hook-form';
import { FiCheckSquare } from 'react-icons/fi';

import { useFoodList } from '../../hooks/useFoodList';
import { FoodPlate } from '../../models/food';

import Button from '../Button';
import Modal from '../Modal';

import { Form } from './styles';

interface FormControls {
  image: string;
  name: string;
  price: string;
  description: string;
}

interface AddFoodModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  onNewFoodAdded: (newFood: FoodPlate) => void;
}

function AddFoodModal({ isOpen, setIsOpen, onNewFoodAdded }: AddFoodModalProps) {
  const { register, handleSubmit } = useForm<FormControls>();
  const { addFood } = useFoodList();

  const onSubmit = handleSubmit(async (data) => {
    const newFood = await addFood(data);

    onNewFoodAdded(newFood);
  });

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={onSubmit}>
        <h1>Novo Prato</h1>

        <label htmlFor="AddFoodModal__image">
          <span>URL da imagem</span>
          <input
            id="AddFoodModal__image"
            type="text"
            name="image"
            placeholder="Cole o link aqui"
            ref={register}
          />
        </label>

        <div className="AddFoodModal__row">
          <label htmlFor="AddFoodModal__name">
            <span>Nome do prato</span>
            <input
              id="AddFoodModal__name"
              type="text"
              name="name"
              placeholder="Ex: Moda Italiana"
              ref={register}
            />
          </label>

          <label htmlFor="AddFoodModal__price">
            <span>Preço</span>
            <input
              id="AddFoodModal__price"
              type="number"
              min="0.00"
              step="0.01"
              name="price"
              ref={register}
            />
          </label>
        </div>

        <label htmlFor="AddFoodModal__description">
          <span>Descrição do prato</span>
          <input
            id="AddFoodModal__description"
            type="text"
            name="description"
            placeholder="Descrição"
            ref={register}
          />
        </label>

        <div className="AddFoodModal__row--button">
          <Button
            type="submit"
            onClick={() => {}}
            text="Adicionar prato"
            icon={<FiCheckSquare size={24} />}
            data-testid="add-food-button"
          />
        </div>
      </Form>
    </Modal>
  );
}

export default AddFoodModal;
