import { HealthCheckController } from '@presentation/controllers/health-check/health-check.controller';
import { IFactory } from '../../protocols/factory';

class HealthCheckControllerFactory implements IFactory {
  instance: HealthCheckController;

  getInstance(): HealthCheckController {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new HealthCheckController();

    return this.instance;
  }
}

export default new HealthCheckControllerFactory();
