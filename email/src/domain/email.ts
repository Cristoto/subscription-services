import { EmailValidator } from './email-validator';

export class Email {
  public to: string;
  public from: string;
  public subject?: string;
  public template: string;

  constructor(to: string, from: string, template: string, subject?: string) {
    this.to = new EmailValidator(to).get();
    this.from = new EmailValidator(from).get();
    this.subject = subject;
    this.template = template;
  }
}
