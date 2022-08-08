interface SubscriptionsParams {
    id: string;
    email: string;
    firstName?: string;
    gender?: string;
    dateOfBirth: Date;
    consent: boolean;
    newsletterIds: string[];
}
export declare class Subscription {
    id: string;
    email: string;
    firstName?: string;
    gender?: string;
    dateOfBirth: Date;
    consent: boolean;
    newsletterIds: string[];
    constructor(params: SubscriptionsParams);
}
export {};
