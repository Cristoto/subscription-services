import { IsEmail, IsNotEmpty } from 'class-validator';

export class SubscriptionDto {
  @IsEmail()
  email!: string;

  firstName?: string;
  gender?: string;

  dateOfBirth!: Date;
  consent!: boolean;

  @IsNotEmpty()
  newsletterId!: string;
}
