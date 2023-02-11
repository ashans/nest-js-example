import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { TypeormStore } from 'connect-typeorm';
import { getConnection, getRepository } from 'typeorm';
import { SessionEntity } from './typeorm/Session';
import { User } from './typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Add global prefix for APIs.
  // app.setGlobalPrefix('/api');
  const sessionRepository = await app.resolve('SessionEntityRepository');
  app.use(
    session({
      name: 'NestJS_Session',
      secret: 'UNSAFE_SECRET_CHANGE_THIS',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000,
      },
      store: new TypeormStore().connect(sessionRepository),
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
