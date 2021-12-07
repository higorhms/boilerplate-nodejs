import { getHealth } from './health-check/get-health.swagger';

const swaggerDocument = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Renova API',
    description: '',
    produces: 'application/json',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },

  host: process.env.API_URL || `http://localhost:80`,
  basePath: '/',
  paths: {
    '/api-status': getHealth,
  },
};

export default swaggerDocument;
