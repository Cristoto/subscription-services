import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubscriptionDocument = Subscription & Document;

@Schema()
export class Subscription {
  @Prop()
  id: string;

  @Prop()
  email: string;

  @Prop({ required: false })
  firstName?: string;

  @Prop({ required: false })
  gender?: string;

  @Prop()
  dateOfBirth: Date;

  @Prop()
  consent: boolean;

  @Prop()
  newsletterIds: string[];
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
