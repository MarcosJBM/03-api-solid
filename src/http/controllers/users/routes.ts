import { FastifyInstance } from 'fastify';

import { verifyJwt } from '@/http/middlewares';

import { authenticate } from './authenticate';
import { profile } from './profile';
import { register } from './register';

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register);
  app.post('/sessions', authenticate);

  app.get('/me', { onRequest: [verifyJwt] }, profile);
}