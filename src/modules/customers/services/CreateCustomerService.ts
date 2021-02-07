import { inject, injectable } from 'tsyringe';

import Token from '@shared/container/token';

import AppError from '@shared/errors/AppError';

import Customer from '../infra/typeorm/entities/Customer';
import ICustomersRepository from '../repositories/ICustomersRepository';

interface IRequest {
  name: string;
  email: string;
}

@injectable()
export default class CreateCustomerService {
  constructor(
    @inject(Token.CustomersRepository) private customersRepository: ICustomersRepository,
  ) {}

  public async execute({ email, name }: IRequest): Promise<Customer> {
    const trimmedEmail = email.trim();
    const existingCustomer = await this.customersRepository.findByEmail(trimmedEmail);

    if (existingCustomer) {
      throw new AppError('E-mail already in use.', 400);
    }

    const newCustomer = await this.customersRepository.create({
      email: trimmedEmail.trim(),
      name,
    });

    return newCustomer;
  }
}
