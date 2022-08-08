import { EventRepository } from 'src/domain/event.repository';
import { Subscription } from 'src/domain/subscription';
export declare class KafkaEventRepository implements EventRepository {
    private client;
    publish(subscription: Subscription): void;
}
