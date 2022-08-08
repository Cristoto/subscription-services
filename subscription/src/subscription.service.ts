import { Inject, Injectable } from '@nestjs/common';
import { Subscription } from './domain/subscription';
import { v4 as uuidv4 } from 'uuid';
import {
  EventRepositorySymbol,
  SubscriptionRepositorySymbol,
} from './infraestructure/symbols';
import { SubscriptionRepository } from './domain/subscription.repository';
import { KafkaEventRepository } from './infraestructure/kafka/kafka-event.repository';

interface CreateSubscriptionParams {
  email: string;
  firstName?: string;
  gender?: string;
  dateOfBirth: Date;
  consent: boolean;
  newsletterId: string;
}

@Injectable()
export class SubscriptionService {
  constructor(
    @Inject(SubscriptionRepositorySymbol)
    private readonly subscriptionRepository: SubscriptionRepository,
    @Inject(EventRepositorySymbol)
    private readonly eventRepository: KafkaEventRepository,
  ) {}

  async create(params: CreateSubscriptionParams): Promise<string> {
    const { consent, dateOfBirth, email, newsletterId, firstName, gender } =
      params;

    const subscription = new Subscription({
      consent,
      dateOfBirth,
      email,
      newsletterIds: [newsletterId],
      firstName,
      gender,
      id: uuidv4(),
    });

    const id = await this.subscriptionRepository.create(subscription);

    this.eventRepository.publish(subscription);

    return id;
  }

  cancel(id: string): void {
    //TODO Ver si pasar la newsLetter también. Para solo darle de baja ahí
    throw Error('Impelemt');
  }

  async get(subscriptionId: string): Promise<Subscription> {
    return this.subscriptionRepository.get(subscriptionId);
  }

  async getAll(): Promise<Subscription[]> {
    return this.subscriptionRepository.getAll();
  }
}
