import { Subscription } from './subscription';
export interface SubscriptionRepository {
    create(subscription: Subscription): Promise<string>;
    remove(id: string): void;
    get(id: string): Promise<Subscription>;
    getAll(): Promise<Subscription[]>;
}
