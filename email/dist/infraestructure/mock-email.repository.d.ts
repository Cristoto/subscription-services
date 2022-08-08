import { Email } from '../domain/email';
import { EmailRepository } from '../domain/email.repository';
export declare class EmailMockRepository implements EmailRepository {
    confirmed(email: Email): void;
}
