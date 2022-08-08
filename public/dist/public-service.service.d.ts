import { SubscriptionRepository } from './domain/subscription.repository';
interface CreateSubscriptionParams {
    email: string;
    firstName?: string;
    gender?: string;
    dateOfBirth: Date;
    consent: boolean;
    newsletterId: string;
}
export declare class PublicServiceService {
    private readonly subscriptionRepository;
    constructor(subscriptionRepository: SubscriptionRepository);
    createSubscription(params: CreateSubscriptionParams): Promise<string>;
}
export {};
