import { Model } from 'mongoose';
import { Subscription } from '../../domain/subscription';
import { SubscriptionRepository } from '../../domain/subscription.repository';
import { SubscriptionDocument } from './subscription.schema';
export declare class SubscriptionMongoRepository implements SubscriptionRepository {
    private subscriptionModel;
    constructor(subscriptionModel: Model<SubscriptionDocument>);
    create(subscription: Subscription): Promise<string>;
    remove(id: string): void;
    get(id: string): Promise<Subscription>;
    getAll(): Promise<Subscription[]>;
}
