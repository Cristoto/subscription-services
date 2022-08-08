import { Inject, Injectable } from '@nestjs/common';
import { Email } from './domain/email';
import { EmailRepository } from './domain/email.repository';
import { ISubscription } from './infraestructure/subscription.interface';
import { EmailRepositorySymbol } from './infraestructure/symbols';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailServiceService {
  constructor(
    @Inject(EmailRepositorySymbol)
    private readonly emailRepository: EmailRepository,
    private readonly configService: ConfigService,
  ) {}

  sendMail(subscription: ISubscription): void {
    const { email } = subscription;

    const emailInformation = new Email(
      email,
      this.configService.get<string>('MAIL_FROM'),
      'html template',
      'Welcome',
    );
    this.emailRepository.confirmed(emailInformation);
  }
}
