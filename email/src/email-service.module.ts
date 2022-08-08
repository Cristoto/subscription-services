import { Module } from '@nestjs/common';
import { EmailServiceController } from './email-service.controller';
import { EmailServiceService } from './email-service.service';
import { EmailMockRepository } from './infraestructure/mock-email.repository';
import { EmailRepositorySymbol } from './infraestructure/symbols';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentValidationSchema } from './infraestructure/environmnent-validation.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: EnvironmentValidationSchema.validate(),
    }),
  ],
  controllers: [EmailServiceController],
  providers: [
    EmailServiceService,
    {
      provide: EmailRepositorySymbol,
      useClass: EmailMockRepository,
    },
  ],
})
export class EmailServiceModule {}
