import { Subscription } from './domain/subscription';
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
export declare class SubscriptionService {
    private readonly subscriptionRepository;
    private readonly eventRepository;
    constructor(subscriptionRepository: SubscriptionRepository, eventRepository: KafkaEventRepository);
    create(params: CreateSubscriptionParams): Promise<string>;
    cancel(id: string): void;
    get(subscriptionId: string): Promise<Subscription>;
    getAll(): Promise<Subscription[]>;
}
export {};
