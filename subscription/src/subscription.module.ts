import { Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Subscription,
  SubscriptionSchema,
} from './infraestructure/mongo/subscription.schema';
import {
  EventRepositorySymbol,
  SubscriptionRepositorySymbol,
} from './infraestructure/symbols';
import { SubscriptionMongoRepository } from './infraestructure/mongo/subscription-mongo.repository';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvironmentValidationSchema } from './infraestructure/environmnent-validation.schema';
import { KafkaEventRepository } from './infraestructure/kafka/kafka-event.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: EnvironmentValidationSchema.validate(),
    }),
    //MongooseModule.forRoot('mongodb://localhost/subscriptions'),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get('MONGO_CONNECTION'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
    MongooseModule.forFeature([
      { name: Subscription.name, schema: SubscriptionSchema },
    ]),
  ],
  controllers: [SubscriptionController],
  providers: [
    SubscriptionService,
    {
      provide: SubscriptionRepositorySymbol,
      useClass: SubscriptionMongoRepository,
    },
    {
      provide: EventRepositorySymbol,
      useClass: KafkaEventRepository,
    },
  ],
})
export class SubscriptionModule {}
