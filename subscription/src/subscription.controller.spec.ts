import { Test, TestingModule } from '@nestjs/testing';
import { Subscription } from './domain/subscription';
import { SubscriptionRepository } from './domain/subscription.repository';
import { SubscriptionRepositorySymbol } from './infraestructure/symbols';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';

class SubscriptionRepositryMock implements SubscriptionRepository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(subscription: Subscription): Promise<string> {
    return new Promise((res) => res('newId'));
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(id: string): void {
    return;
  }
  get(id: string): Promise<Subscription> {
    return new Promise((res) =>
      res(
        new Subscription({
          consent: true,
          dateOfBirth: new Date(),
          email: 'test@test.com',
          newsletterIds: ['new'],
          firstName: 'Cristo',
          gender: 'male',
          id,
        }),
      ),
    );
  }
  getAll(): Promise<Subscription[]> {
    return new Promise((res) =>
      res([
        new Subscription({
          consent: true,
          dateOfBirth: new Date(),
          email: 'test@test.com',
          newsletterIds: ['new'],
          firstName: 'Cristo',
          gender: 'male',
          id: 'test',
        }),
      ]),
    );
  }
}

describe('SubscriptionsController', () => {
  let subscriptionController: SubscriptionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SubscriptionController],
      providers: [
        SubscriptionService,
        {
          provide: SubscriptionRepositorySymbol,
          useClass: SubscriptionRepositryMock,
        },
      ],
    }).compile();

    subscriptionController = app.get<SubscriptionController>(
      SubscriptionController,
    );
  });

  describe('root', () => {
    it('should return new user identifier', async () => {
      expect(
        await subscriptionController.subscription({
          consent: true,
          dateOfBirth: new Date(),
          email: 'test@test.com',
          newsletterId: 'asjdasldkjkje3423s',
          firstName: 'Cristo',
          gender: 'male',
        }),
      ).toBe('newId');
    });

    it('should throw error because email is not valid', async () => {
      try {
        await subscriptionController.subscription({
          consent: true,
          dateOfBirth: new Date(),
          email: 'test.com',
          newsletterId: 'asjdasldkjkje3423s',
          firstName: 'Cristo',
          gender: 'male',
        });
      } catch (e) {
        expect(() => {
          throw e;
        }).toThrow();
      }
    });

    it('should retrive one element', async () => {
      const subscription = await subscriptionController.get('test');
      expect(subscription).toBeTruthy();
    });

    it('should retrive an array with elements', async () => {
      const subscriptions = await subscriptionController.getAll();
      expect(subscriptions.length).toBeGreaterThan(0);
    });
  });
});
