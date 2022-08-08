import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSubscriptionDto } from './infraestructure/create-subscription.dto';
import { ResponseSubscriptionDto } from './infraestructure/response-subscription.dto';
import { SubscriptionService } from './subscription.service';

@ApiTags('subscriptions')
@Controller()
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Post()
  subscription(
    @Body() createSubscriptionDto: CreateSubscriptionDto,
  ): Promise<string> {
    const { consent, dateOfBirth, email, newsletterId, firstName, gender } =
      createSubscriptionDto;

    return this.subscriptionService.create({
      consent,
      dateOfBirth,
      email,
      newsletterId,
      firstName,
      gender,
    });
  }

  @Delete(':id')
  cancel(@Param('id') id: string): void {
    this.subscriptionService.cancel(id);
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<ResponseSubscriptionDto> {
    const subscription = await this.subscriptionService.get(id);

    return {
      ...subscription,
    };
  }

  @Get()
  async getAll(): Promise<ResponseSubscriptionDto[]> {
    const subscriptions = await this.subscriptionService.getAll();

    return subscriptions.map((subscription) => {
      return {
        ...subscription,
      };
    });
  }
}
