import { Module } from '@nestjs/common';
import { SubscriptionApiRepository } from './infraestructure/subscription-api.repository';
import { SubscriptionRepositorySymbol } from './infraestructure/symbols';
import { PublicServiceController } from './public-service.controller';
import { PublicServiceService } from './public-service.service';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentValidationSchema } from './infraestructure/environmnent-validation.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: EnvironmentValidationSchema.validate(),
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
  ],
  controllers: [PublicServiceController],
  providers: [
    PublicServiceService,
    {
      provide: SubscriptionRepositorySymbol,
      useClass: SubscriptionApiRepository,
    },
  ],
})
export class PublicServiceModule {}
