import { EmailRepository } from './domain/email.repository';
import { ISubscription } from './infraestructure/subscription.interface';
import { ConfigService } from '@nestjs/config';
export declare class EmailServiceService {
    private readonly emailRepository;
    private readonly configService;
    constructor(emailRepository: EmailRepository, configService: ConfigService);
    sendMail(subscription: ISubscription): void;
}
