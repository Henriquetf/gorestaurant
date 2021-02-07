import { getRepository, Repository } from 'typeorm';

import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';
import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';

import Order from '../entities/Order';

export default class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  create(data: ICreateOrderDTO): Promise<Order> {
    throw new Error('Method not implemented.');
  }

  findById(id: string): Promise<Order | undefined> {
    throw new Error('Method not implemented.');
  }
}
