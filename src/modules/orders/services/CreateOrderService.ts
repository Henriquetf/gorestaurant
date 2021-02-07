import { inject, injectable } from 'tsyringe';

import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import Token from '@shared/container/token';

import Order from '../infra/typeorm/entities/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';

@injectable()
export default class CreateOrderService {
  constructor(
    @inject(Token.OrdersRepository) private ordersRepository: IOrdersRepository,
    @inject(Token.ProductsRepository) private productsRepository: IProductsRepository,
    @inject(Token.CustomersRepository) private customersRepository: ICustomersRepository,
  ) {}

  public async execute(): Promise<Order> {}
}
