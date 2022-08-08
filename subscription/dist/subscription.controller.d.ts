import { CreateSubscriptionDto } from './infraestructure/create-subscription.dto';
import { ResponseSubscriptionDto } from './infraestructure/response-subscription.dto';
import { SubscriptionService } from './subscription.service';
export declare class SubscriptionController {
    private readonly subscriptionService;
    constructor(subscriptionService: SubscriptionService);
    subscription(createSubscriptionDto: CreateSubscriptionDto): Promise<string>;
    cancel(id: string): void;
    get(id: string): Promise<ResponseSubscriptionDto>;
    getAll(): Promise<ResponseSubscriptionDto[]>;
}
