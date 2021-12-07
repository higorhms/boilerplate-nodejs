export const getHealth = {
  get: {
    tags: ['API-Status'],
    summary: '',
    parameters: [
      {
        in: 'header',
        name: 'recommendationKey',
        schema: {
          type: 'string',
          example: '88kd9fha23jjd823j3od93hd9i1j23hd83',
        },
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'success',
        schema: {
          example: {
            ok: true,
          },
        },
      },
      '401': {
        description: 'Unauthorized',
        schema: {
          example: {
            status: 'error',
            message: 'Unauthorized',
          },
        },
      },
    },
  },
};
