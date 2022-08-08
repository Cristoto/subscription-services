interface SubscriptionsParams {
    id?: string;
    email: string;
    firstName?: string;
    gender?: string;
    dateOfBirth: Date;
    consent: boolean;
    newsletterId: string;
}
export declare class Subscription {
    id?: string;
    email: string;
    firstName?: string;
    gender?: string;
    dateOfBirth: Date;
    consent: boolean;
    newsletterId: string;
    constructor(params: SubscriptionsParams);
}
export {};
