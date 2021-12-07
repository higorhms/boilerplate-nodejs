import { successResponse } from '../../helpers/http/http-helper';
import { HttpRequest, HttpResponse } from '../../protocols/http';
import { IController } from '../../protocols/controller';

export class HealthCheckController implements IController {
  async handle(_: HttpRequest): Promise<HttpResponse> {
    return successResponse({ ok: true });
  }
}
