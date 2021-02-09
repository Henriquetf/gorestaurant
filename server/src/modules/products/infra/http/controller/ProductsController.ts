import { RequestHandler } from 'express';
import { container } from 'tsyringe';

import CreateProductService from '@modules/products/services/CreateProductService';

export default class ProductsController {
  create: RequestHandler = async (request, response) => {
    const { name, price, quantity } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const newProduct = await createProduct.execute({
      name,
      price,
      quantity,
    });

    return response.json(newProduct);
  };
}