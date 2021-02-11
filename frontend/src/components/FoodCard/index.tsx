import { useCallback, useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import { FoodPlate } from '../../models/food';
import { setAvailable } from '../../services/api/food';

import { Container, Content, Footer, Header, Price } from './styles';

interface FoodCardProps {
  product: FoodPlate;
  onEdit: (food: FoodPlate) => void;
  onDelete: (id: number) => void;
}

function FoodCard({ product, onEdit, onDelete }: FoodCardProps) {
  const [isAvailable, setIsAvailable] = useState(product.available);

  const handleClickEdit = useCallback(() => {
    onEdit(product);
  }, [onEdit, product]);

  const handleClickDelete = useCallback(() => {
    onDelete(product.id);
  }, [onDelete, product.id]);

  const toggleAvailable = useCallback(async () => {
    setIsAvailable(!isAvailable);

    await setAvailable({
      available: !isAvailable,
      id: product.id,
    });
  }, [isAvailable, product.id]);

  return (
    <Container>
      <Header>
        <img src={product.image} alt={product.name} />
      </Header>
      <Content>
        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <Price available={isAvailable}>
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
          <span>{isAvailable ? 'Disponível' : 'Indisponível'}</span>

          <label htmlFor={`change-status-food-${product.id}`} className="switch">
            <input
              id={`change-status-food-${product.id}`}
              type="checkbox"
              checked={isAvailable}
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
