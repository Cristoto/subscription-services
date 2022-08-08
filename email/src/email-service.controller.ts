import { Controller } from '@nestjs/common';
import { EmailServiceService } from './email-service.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IKafkaMessage } from './infraestructure/kafka-message.interface';
import { ISubscription } from './infraestructure/subscription.interface';

@Controller()
export class EmailServiceController {
  constructor(private readonly emailServiceService: EmailServiceService) {}

  @MessagePattern('send.email')
  confirm(@Payload() message: IKafkaMessage<ISubscription>) {
    console.log(message);
    const { value } = message;
    console.log(value);
    this.emailServiceService.sendMail(value);
  }
}
