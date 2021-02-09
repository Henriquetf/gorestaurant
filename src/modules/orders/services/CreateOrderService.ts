import { inject, injectable } from 'tsyringe';

import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import Token from '@shared/container/token';

import AppError from '@shared/errors/AppError';

import Order from '../infra/typeorm/entities/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';

interface IProduct {
  id: string;
  quantity: number;
}

interface IRequest {
  customerId: string;
  products: IProduct[];
}

@injectable()
export default class CreateOrderService {
  constructor(
    @inject(Token.OrdersRepository) private ordersRepository: IOrdersRepository,
    @inject(Token.ProductsRepository) private productsRepository: IProductsRepository,
    @inject(Token.CustomersRepository) private customersRepository: ICustomersRepository,
  ) {}

  public async execute({ customerId, products }: IRequest): Promise<Order> {
    const customer = await this.customersRepository.findById(customerId);

    if (!customer) {
      throw new AppError('Customer not found', 400);
    }

    const productsId = products.map((product) => product.id);
    const orderProducts = await this.productsRepository.findAllById(productsId);

    if (orderProducts.length !== productsId.length) {
      throw new AppError('Cannot create an order with invalid products.', 400);
    }

    const newOrder = this.ordersRepository.create({
      customer,
      products: orderProducts.map((product) => {
        const productById = products.find(({ id }) => id === product.id);

        if (!productById || productById.quantity > product.quantity) {
          throw new AppError(`Cannot exceed the total product amount of ${product.quantity}`, 400);
        }

        return {
          price: product.price,
          productId: product.id,
          quantity: productById.quantity,
        };
      }),
    });

    const productsNewAmount = products.map((product) => ({
      id: product.id,
      quantity: orderProducts.filter(({ id }) => id === product.id)[0].quantity - product.quantity,
    }));

    await this.productsRepository.updateQuantity(productsNewAmount);

    return newOrder;
  }
}
