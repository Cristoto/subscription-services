import { Inject, Injectable } from '@nestjs/common';
import { Subscription } from './domain/subscription';
import { SubscriptionRepository } from './domain/subscription.repository';
import { SubscriptionRepositorySymbol } from './infraestructure/symbols';

interface CreateSubscriptionParams {
  email: string;
  firstName?: string;
  gender?: string;
  dateOfBirth: Date;
  consent: boolean;
  newsletterId: string;
}

@Injectable()
export class PublicServiceService {
  constructor(
    @Inject(SubscriptionRepositorySymbol)
    private readonly subscriptionRepository: SubscriptionRepository,
  ) {}

  async createSubscription(params: CreateSubscriptionParams): Promise<string> {
    const { consent, dateOfBirth, email, newsletterId, firstName, gender } =
      params;

    const subscription = new Subscription({
      consent,
      dateOfBirth,
      email,
      newsletterId,
      firstName,
      gender,
    });

    return await this.subscriptionRepository.create(subscription);
  }
}
