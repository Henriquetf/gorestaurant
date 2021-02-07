import { inject, injectable } from 'tsyringe';

import Token from '@shared/container/token';

import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
export default class CreateProductService {
  constructor(@inject(Token.ProductsRepository) private productsRepository: IProductsRepository) {}

  public async execute(): Promise<Product> {}
}
