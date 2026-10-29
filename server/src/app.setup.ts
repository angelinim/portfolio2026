import { INestApplication } from '@nestjs/common';

export const API_PREFIX = 'api'

export function configureApp(app: INestApplication) {
  app.setGlobalPrefix('API_PREFIX');
}
