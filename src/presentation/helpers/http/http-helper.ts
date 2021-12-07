/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { HttpResponse } from '../../protocols/http';
import AppError from '../../errors/app-error';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new AppError('Unauthorized'),
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new AppError('Internal Server Error', 500, error.stack),
});

export const successResponse = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});
