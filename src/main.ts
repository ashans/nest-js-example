import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Add global prefix for APIs.
  // app.setGlobalPrefix('/api');
  await app.listen(3000);
}
bootstrap();
