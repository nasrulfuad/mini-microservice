import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  MicroserviceOptions,
  RmqOptions,
  Transport,
} from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,
      options: {
        servers: [process.env.NATS_HOST],
      },
    },
  );

  await app.listen();

  logger.verbose('User service is running');
}
bootstrap();
