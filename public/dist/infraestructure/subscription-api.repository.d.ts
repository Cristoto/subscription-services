import { Subscription } from '../domain/subscription';
import { SubscriptionRepository } from '../domain/subscription.repository';
export declare class SubscriptionApiRepository implements SubscriptionRepository {
    create(subscription: Subscription): string;
    remove(id: string): void;
    get(id: string): Subscription;
    getAll(): Subscription[];
}
