import { getRepository, Repository } from 'typeorm';

import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';

import Customer from '../entities/Customer';

export default class CustomerRepository implements ICustomersRepository {
  private ormRepository: Repository<Customer>;

  constructor() {
    this.ormRepository = getRepository(Customer);
  }

  create(): Promise<Customer> {
    throw new Error('Method not implemented.');
  }

  findByEmail(email: string): Promise<Customer | null> {
    throw new Error('Method not implemented.');
  }

  findById(id: string): Promise<Customer | null> {
    throw new Error('Method not implemented.');
  }
}
