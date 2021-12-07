import { Request, Response } from 'express';

import { HttpResponse } from '../../presentation/protocols/http';
import { IController } from '../../presentation/protocols/controller';

export const ExpressRouteAdapter = (controller: IController) => {
  return async (req: Request, res: Response): Promise<void> => {
    const httpResponse: HttpResponse = await controller.handle({
      params: req.params,
      body: req.body,
      headers: {
        authorization: req.headers.authorization,
        recommendationKey: req.headers.recommendationKey as string | undefined,
      },
    });

    if (httpResponse.statusCode === 200) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message,
      });
    }
  };
};
