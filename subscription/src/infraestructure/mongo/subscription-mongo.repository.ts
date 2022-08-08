import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscription } from '../../domain/subscription';
import { SubscriptionRepository } from '../../domain/subscription.repository';
import {
  Subscription as SubscriptionMongo,
  SubscriptionDocument,
} from './subscription.schema';

@Injectable()
export class SubscriptionMongoRepository implements SubscriptionRepository {
  constructor(
    @InjectModel(SubscriptionMongo.name)
    private subscriptionModel: Model<SubscriptionDocument>,
  ) {}

  async create(subscription: Subscription): Promise<string> {
    const { id, email, newsletterIds } = subscription;

    const userWithEmail = await this.subscriptionModel
      .findOne({
        email,
      })
      .exec();

    if (!userWithEmail) {
      this.subscriptionModel.create(subscription);
      return id;
    }

    if (userWithEmail.newsletterIds.includes(newsletterIds[0])) {
      throw new HttpException(
        'Email already exist in this newsletter',
        HttpStatus.BAD_REQUEST,
      );
    }

    this.subscriptionModel.updateOne(
      { email },
      {
        newsletterIds: [...userWithEmail.newsletterIds, ...newsletterIds],
      },
    );

    return id;
  }

  remove(id: string): void {
    throw new Error('Method not implemented.');
  }

  async get(id: string): Promise<Subscription> {
    const subscription = await this.subscriptionModel.findOne({ id }).exec();

    if (!subscription) return undefined;
    const { email, firstName, gender, newsletterIds, dateOfBirth, consent } =
      subscription;

    return {
      id,
      consent,
      dateOfBirth,
      email,
      newsletterIds,
      firstName,
      gender,
    };
  }
  async getAll(): Promise<Subscription[]> {
    const subscriptions = await this.subscriptionModel.find().exec();

    return subscriptions.map((subscription) => {
      const {
        id,
        email,
        firstName,
        gender,
        newsletterIds,
        dateOfBirth,
        consent,
      } = subscription;

      return {
        id,
        consent,
        dateOfBirth,
        email,
        newsletterIds,
        firstName,
        gender,
      };
    });
  }
}
