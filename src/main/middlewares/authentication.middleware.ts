import { NextFunction, Request, Response } from 'express';

export const authenticationMiddleware = (
  request: Request,
  _: Response,
  next: NextFunction,
): void => {
  // validation with JKS

  next();
};
