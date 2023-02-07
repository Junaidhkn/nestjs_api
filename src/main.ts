import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Would not send any addition Data that is not part of a DTO
      transform: true,
      forbidNonWhitelisted: true, // Would Fail request if Data is not part of a DTO
    }),
  );
  await app.listen(8000);
}
bootstrap();
