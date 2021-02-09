import { getRepository, In, Repository } from 'typeorm';

import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import IUpdateProductQuantityDTO from '@modules/products/dtos/IUpdateProductQuantityDTO';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';

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

  public async findAllById(productsId: string[]): Promise<Product[]> {
    const products = await this.ormRepository.find({
      where: {
        id: In(productsId),
      },
    });

    return products || null;
  }

  public async updateQuantity(products: IUpdateProductQuantityDTO[]): Promise<Product[]> {
    return this.ormRepository.save(products);
  }
}
