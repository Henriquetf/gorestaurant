import { getRepository, Repository } from 'typeorm';

import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';
import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';

import Order from '../entities/Order';

export default class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async create({ customer, products }: ICreateOrderDTO): Promise<Order> {
    const newOrder = this.ormRepository.create({
      customer,
      products,
    });

    await this.ormRepository.save(newOrder);

    return newOrder;
  }

  public async findById(id: string): Promise<Order | null> {
    const order = await this.ormRepository.findOne({
      where: {
        id,
      },
      relations: ['products', 'customer'],
    });

    return order || null;
  }
}
