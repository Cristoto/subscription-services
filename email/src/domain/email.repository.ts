import { Email } from './email';

export interface EmailRepository {
  confirmed(email: Email): void;
}
