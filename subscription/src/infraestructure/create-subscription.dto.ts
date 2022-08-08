import { IsEmail } from 'class-validator';

export class CreateSubscriptionDto {
  @IsEmail()
  email!: string;

  firstName?: string;
  gender?: string;

  dateOfBirth!: Date;
  consent!: boolean;
  newsletterId!: string;
}
