/* eslint-disable no-console */
import 'reflect-metadata';
import 'dotenv/config';
import express, { Express } from 'express';
import 'express-async-errors';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';

import globalErrorsMiddleware from '@main/middlewares/global-errors.middleware';
import routes from '@main/routes';
import swaggerDocument from '../swagger/swaggerDocument';

class Server {
  public server: Express;

  constructor() {
    this.server = express();

    this.middlewares();
    this.setupSwagger();
    this.routes();
    this.errorHandling();
  }

  private middlewares(): void {
    this.server.use(cors());
    this.server.use(express.json({ limit: 5000000 }));
  }

  private routes(): void {
    this.server.use(routes);
  }

  private errorHandling(): void {
    this.server.use(globalErrorsMiddleware);
  }

  private setupSwagger(): void {
    this.server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  }
}

export default new Server().server;
