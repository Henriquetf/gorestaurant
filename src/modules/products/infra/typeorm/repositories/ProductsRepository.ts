import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import IUpdateProductQuantityDTO from '@modules/products/dtos/IUpdateProductQuantityDTO';
import IProductsRepository, {
  IFindProducts,
} from '@modules/products/repositories/IProductsRepository';

import Product from '../entities/Product';

export default class ProductsRepository implements IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product> {
    throw new Error('Method not implemented.');
  }

  findByName(name: string): Promise<Product | null> {
    throw new Error('Method not implemented.');
  }

  findAllById(products: IFindProducts[]): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }

  updateQuantity(products: IUpdateProductQuantityDTO[]): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
}
