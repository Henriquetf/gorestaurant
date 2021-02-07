import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import IUpdateProductQuantityDTO from '@modules/products/dtos/IUpdateProductQuantityDTO';
import IProductsRepository, {
  IFindProducts,
} from '@modules/products/repositories/IProductsRepository';
import { getRepository, Repository } from 'typeorm';

import Product from '../entities/Product';

export default class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create(data: ICreateProductDTO): Promise<Product> {
    const newProduct = this.ormRepository.create(data);

    await this.ormRepository.save(newProduct);

    return newProduct;
  }

  public async findByName(name: string): Promise<Product | null> {
    const product = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return product || null;
  }

  findAllById(products: IFindProducts[]): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }

  updateQuantity(products: IUpdateProductQuantityDTO[]): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }
}
