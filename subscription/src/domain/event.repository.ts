import { Subscription } from './subscription';

export interface EventRepository {
  publish(subscription: Subscription): void;
}
