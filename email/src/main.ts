import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { EmailServiceModule } from './email-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EmailServiceModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: [`${process.env.KAFKA_URL}:${process.env.KAFKA_PORT}`],
        },
        consumer: {
          groupId: process.env.KAFKA_GROUPID,
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
