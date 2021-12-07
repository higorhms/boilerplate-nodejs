import { Router } from 'express';

import HealthCheckControllerFactory from '../factories/health-check/health-check.factory';
import { ExpressRouteAdapter } from '../../infra/express/express-route.adapter';

const healthCheckRoutes = Router();

healthCheckRoutes.get(
  '/',
  ExpressRouteAdapter(HealthCheckControllerFactory.getInstance()),
);

export default healthCheckRoutes;
