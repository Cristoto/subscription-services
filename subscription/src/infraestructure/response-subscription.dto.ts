export class ResponseSubscriptionDto {
  id: string;
  email: string;
  firstName?: string;
  gender?: string;
  dateOfBirth: Date;
  consent: boolean;
  newsletterIds: string[];
}
