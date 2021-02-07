import { inject, injectable } from 'tsyringe';

import Token from '@shared/container/token';

import AppError from '@shared/errors/AppError';

import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

@injectable()
export default class CreateProductService {
  constructor(@inject(Token.ProductsRepository) private productsRepository: IProductsRepository) {}

  public async execute({ name, price, quantity }: IRequest): Promise<Product> {
    const trimmedName = name.trim();
    const existingProduct = await this.productsRepository.findByName(trimmedName);

    if (existingProduct) {
      throw new AppError('Product already exists', 400);
    }

    const newProduct = await this.productsRepository.create({
      name,
      price,
      quantity,
    });

    return newProduct;
  }
}
