import { getRepository, Repository } from 'typeorm';

import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';

import ICreateCustomerDTO from '@modules/customers/dtos/ICreateCustomerDTO';

import Customer from '../entities/Customer';

export default class CustomerRepository implements ICustomersRepository {
  private ormRepository: Repository<Customer>;

  constructor() {
    this.ormRepository = getRepository(Customer);
  }

  public async findById(id: string): Promise<Customer | null> {
    const customer = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return customer || null;
  }

  public async findByEmail(email: string): Promise<Customer | null> {
    const customer = await this.ormRepository.findOne({
      where: {
        email,
      },
    });

    return customer || null;
  }

  public async create(data: ICreateCustomerDTO): Promise<Customer> {
    const newCustomer = this.ormRepository.create(data);

    await this.ormRepository.save(newCustomer);

    return newCustomer;
  }
}
