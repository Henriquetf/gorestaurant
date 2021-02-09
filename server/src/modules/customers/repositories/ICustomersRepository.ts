import ICreateCustomerDTO from '../dtos/ICreateCustomerDTO';
import Customer from '../infra/typeorm/entities/Customer';

export default interface ICustomersRepository {
  create(data: ICreateCustomerDTO): Promise<Customer>;
  findByEmail(email: string): Promise<Customer | null>;
  findById(id: string): Promise<Customer | null>;
}
