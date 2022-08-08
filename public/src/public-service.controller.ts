import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SubscriptionDto } from './infraestructure/subscription.dto';
import { PublicServiceService } from './public-service.service';

@ApiTags('subscriptions')
@Controller('subscription')
export class PublicServiceController {
  constructor(private readonly publicServiceService: PublicServiceService) {}

  @Post()
  subscription(@Body() subscriptionDto: SubscriptionDto): Promise<string> {
    const { consent, dateOfBirth, email, newsletterId, firstName, gender } =
      subscriptionDto;

    return this.publicServiceService.createSubscription({
      consent,
      dateOfBirth,
      email,
      newsletterId,
      firstName,
      gender,
    });
  }
}
