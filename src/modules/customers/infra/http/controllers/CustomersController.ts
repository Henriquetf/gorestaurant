import CreateCustomerService from '@modules/customers/services/CreateCustomerService';
import { RequestHandler } from 'express';
import { container } from 'tsyringe';

export default class CustomersController {
  create: RequestHandler = async (request, response) => {
    const { name, email } = request.body;

    const createCustomer = container.resolve(CreateCustomerService);
    const client = await createCustomer.execute({
      name,
      email,
    });

    return response.json(client);
  };
}
