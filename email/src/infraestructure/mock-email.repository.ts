import { Injectable } from '@nestjs/common';
import { Email } from '../domain/email';
import { EmailRepository } from '../domain/email.repository';

@Injectable()
export class EmailMockRepository implements EmailRepository {
  confirmed(email: Email): void {
    return;
  }
}
