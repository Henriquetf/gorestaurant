import { NextFunction, Request, Response } from 'express';

import AppError from '@shared/errors/AppError';

export default function errorHandler(
  err: Error,
  _: Request,
  response: Response,
  __: NextFunction,
): Response {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  // eslint-disable-next-line no-console
  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
