import { ENV } from './infra/env/env-config';
import App from './infra/express';

App.listen(ENV.port, () => {
  console.log(`🚀 - Server started on port ${ENV.port}`);
});
