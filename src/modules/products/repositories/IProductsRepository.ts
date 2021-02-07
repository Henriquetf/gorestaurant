import ICreateProductDTO from '../dtos/ICreateProductDTO';
import IUpdateProductQuantityDTO from '../dtos/IUpdateProductQuantityDTO';
import Product from '../infra/typeorm/entities/Product';

export interface IFindProducts {
  id: string;
}

export default interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  findByName(name: string): Promise<Product | null>;
  findAllById(products: IFindProducts[]): Promise<Product[]>;
  updateQuantity(products: IUpdateProductQuantityDTO[]): Promise<Product[]>;
}
