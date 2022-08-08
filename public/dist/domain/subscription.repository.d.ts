import { Subscription } from './subscription';
export interface SubscriptionRepository {
    create(subscription: Subscription): string;
    remove(id: string): void;
    get(id: string): Subscription;
    getAll(): Subscription[];
}
