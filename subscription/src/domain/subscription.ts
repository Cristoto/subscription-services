import { SubscriptionEmail } from './subscription-email';

interface SubscriptionsParams {
  id: string;
  email: string;
  firstName?: string;
  gender?: string;
  dateOfBirth: Date;
  consent: boolean;
  newsletterIds: string[];
}

export class Subscription {
  public id: string;
  public email: string;
  public firstName?: string;
  public gender?: string;
  public dateOfBirth: Date;
  public consent: boolean;
  public newsletterIds: string[];

  constructor(params: SubscriptionsParams) {
    const {
      email,
      consent,
      dateOfBirth,
      newsletterIds,
      firstName,
      gender,
      id,
    } = params;

    const subscriptionEmail = new SubscriptionEmail(email);
    this.email = subscriptionEmail.get();
    this.firstName = firstName;
    this.consent = consent;
    this.dateOfBirth = dateOfBirth;
    this.newsletterIds = newsletterIds;
    this.gender = gender;
    this.id = id;
  }
}
