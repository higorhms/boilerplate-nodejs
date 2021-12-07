import * as dotenv from 'dotenv';

import { IEnv } from './env-interface';

dotenv.config();

export const ENV: IEnv = {
  environment: process.env.NODE_ENV as string,
  port: parseInt(process.env.PORT || process.env.API_PORT || '80', 10),
};
