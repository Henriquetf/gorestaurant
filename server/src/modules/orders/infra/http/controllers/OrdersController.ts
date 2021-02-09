import CreateOrderService from '@modules/orders/services/CreateOrderService';
import FindOrderService from '@modules/orders/services/FindOrderService';
import { RequestHandler } from 'express';
import { container } from 'tsyringe';

export default class OrdersController {
  public show: RequestHandler = async (request, response) => {
    const { id } = request.params;

    const findOrder = container.resolve(FindOrderService);
    const order = await findOrder.execute(id);

    return response.json(order);
  };

  public create: RequestHandler = async (request, response) => {
    const { customer_id: customerId, products } = request.body;

    const createOrder = container.resolve(CreateOrderService);
    const order = await createOrder.execute({
      customerId,
      products,
    });

    return response.json(order);
  };
}
