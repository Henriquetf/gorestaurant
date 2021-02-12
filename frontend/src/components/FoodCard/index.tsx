import { useCallback } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import { useFoodList } from '../../hooks/useFoodList';
import { FoodPlate } from '../../models/food';

import { Container, Content, Footer, Header, Price } from './styles';

interface FoodCardProps {
  product: FoodPlate;
}

function FoodCard({ product }: FoodCardProps) {
  const { setAvailable, removeFood, setEditingFood } = useFoodList();

  const handleClickEdit = useCallback(() => {
    setEditingFood(product);
  }, [setEditingFood, product]);

  const handleClickDelete = useCallback(async () => {
    await removeFood(product.id);
  }, [removeFood, product.id]);

  const toggleAvailable = useCallback(async () => {
    await setAvailable(product.id, !product.available);
  }, [product.available, product.id, setAvailable]);

  return (
    <Container>
      <Header>
        <img src={product.image} alt={product.name} />
      </Header>
      <Content>
        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <Price available={product.available}>
          R$
          <strong>{product.price}</strong>
        </Price>
      </Content>
      <Footer>
        <button type="button" onClick={handleClickEdit} data-testid={`edit-food-${product.id}`}>
          <FiEdit3 />
        </button>
        <button type="button" onClick={handleClickDelete} data-testid={`remove-food-${product.id}`}>
          <FiTrash />
        </button>

        <div>
          <span>{product.available ? 'Disponível' : 'Indisponível'}</span>

          <label htmlFor={`change-status-food-${product.id}`} className="switch">
            <input
              id={`change-status-food-${product.id}`}
              type="checkbox"
              checked={product.available}
              onChange={toggleAvailable}
              name={`change-status-food-${product.id}`}
              data-testid={`change-status-food-${product.id}`}
            />
            <span className="slider" />
          </label>
        </div>
      </Footer>
    </Container>
  );
}

export default FoodCard;
