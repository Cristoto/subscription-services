import { EmailServiceService } from './email-service.service';
import { IKafkaMessage } from './infraestructure/kafka-message.interface';
import { ISubscription } from './infraestructure/subscription.interface';
export declare class EmailServiceController {
    private readonly emailServiceService;
    constructor(emailServiceService: EmailServiceService);
    confirm(message: IKafkaMessage<ISubscription>): void;
}
