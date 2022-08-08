import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Subscription } from '../domain/subscription';
import { SubscriptionRepository } from '../domain/subscription.repository';
import axios from 'axios';

@Injectable()
export class SubscriptionApiRepository implements SubscriptionRepository {
  private url: string;

  constructor(private readonly configService: ConfigService) {
    this.url = this.configService.get('SUBSCRIPTION_API_URL');
  }

  async create(subscription: Subscription): Promise<string> {
    const petitionResult = await axios.post(this.url, subscription);

    return petitionResult.data.id;
  }
  remove(id: string): void {
    axios.delete(`${this.url}/${id}`);
  }

  async get(id: string): Promise<Subscription> {
    const petitionResult = await axios.get(`${this.url}/${id}`);
    return petitionResult.data;
  }

  async getAll(): Promise<Subscription[]> {
    const petitionResult = await axios.get(`${this.url}`);
    return petitionResult.data;
  }
}
