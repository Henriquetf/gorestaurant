import { inject, injectable } from 'tsyringe';

import Token from '@shared/container/token';

import Customer from '../infra/typeorm/entities/Customer';
import ICustomersRepository from '../repositories/ICustomersRepository';

@injectable()
export default class CreateCustomerService {
  constructor(
    @inject(Token.CustomersRepository) private customersRepository: ICustomersRepository,
  ) {}

  public async execute(): Promise<Customer> {}
}
