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

interface EditFoodModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: FoodPlate | null;
}

function EditFoodModal({ isOpen, setIsOpen, editingFood }: EditFoodModalProps) {
  const { register, handleSubmit } = useForm<FormControls>();
  const { updateFood, setEditingFood } = useFoodList();

  const onSubmit = handleSubmit(async (data) => {
    if (!editingFood) return;

    await updateFood(editingFood.id, data);

    setEditingFood(null);
  });

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={onSubmit}>
        <h1>Editar Prato</h1>

        <label htmlFor="EditFoodModal__image">
          <span>URL da imagem</span>
          <input
            id="EditFoodModal__image"
            type="text"
            name="image"
            placeholder="Cole o link aqui"
            ref={register}
            defaultValue={editingFood?.image}
          />
        </label>

        <div className="EditFoodModal__row">
          <label htmlFor="EditFoodModal__name">
            <span>Nome do prato</span>
            <input
              id="EditFoodModal__name"
              type="text"
              name="name"
              placeholder="Ex: Moda Italiana"
              ref={register}
              defaultValue={editingFood?.name}
            />
          </label>

          <label htmlFor="EditFoodModal__price">
            <span>Preço</span>
            <input
              id="EditFoodModal__price"
              type="number"
              min="0.00"
              step="0.01"
              name="price"
              ref={register}
              defaultValue={editingFood?.price}
            />
          </label>
        </div>

        <label htmlFor="EditFoodModal__description">
          <span>Descrição do prato</span>
          <input
            id="EditFoodModal__description"
            type="text"
            name="description"
            placeholder="Descrição"
            ref={register}
            defaultValue={editingFood?.description}
          />
        </label>

        <div className="EditFoodModal__row--button">
          <Button
            type="submit"
            onClick={() => {}}
            text="Editar prato"
            icon={<FiCheckSquare size={24} />}
            data-testid="edit-food-button"
          />
        </div>
      </Form>
    </Modal>
  );
}

export default EditFoodModal;
