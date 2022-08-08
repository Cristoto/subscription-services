import { SubscriptionDto } from './infraestructure/subscription.dto';
import { PublicServiceService } from './public-service.service';
export declare class PublicServiceController {
    private readonly publicServiceService;
    constructor(publicServiceService: PublicServiceService);
    subscription(subscriptionDto: SubscriptionDto): Promise<string>;
}
