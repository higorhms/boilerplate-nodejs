import { authenticationMiddleware } from '@main/middlewares/authentication.middleware';
import { Router } from 'express';

import healthCheckRoutes from './health-check.routes';

const routes = Router();

routes.use('/health', healthCheckRoutes);
routes.use(authenticationMiddleware);

export default routes;
