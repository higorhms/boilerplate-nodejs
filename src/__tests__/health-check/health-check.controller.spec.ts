import { HealthCheckController } from '@presentation/controllers/health-check/health-check.controller';
import { IController } from '@presentation/protocols/controller';
import { FAKE_REQUEST } from '../__mocks__/http-request/request.mock';

let healthCheckController: IController;

describe('.:: HealthCheckController ::.', () => {
  beforeAll(() => {
    healthCheckController = new HealthCheckController();
  });

  it(`Should be able to return the status 200 if called correctly`, async () => {
    const httpResponse = await healthCheckController.handle(FAKE_REQUEST);

    expect(httpResponse).toBeTruthy();
    expect(httpResponse.body).toBeTruthy();
    expect(httpResponse.statusCode).toBe(200);
  });
});
