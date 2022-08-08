import { Test, TestingModule } from '@nestjs/testing';
import { Subscription } from './domain/subscription';
import { SubscriptionRepository } from './domain/subscription.repository';
import { SubscriptionRepositorySymbol } from './infraestructure/symbols';
import { PublicServiceController } from './public-service.controller';
import { PublicServiceService } from './public-service.service';
import { v4 as uuidv4 } from 'uuid';

class SubscriptionRepositryMock implements SubscriptionRepository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(subscription: Subscription): string {
    return 'newId';
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(id: string): void {
    return;
  }
  get(id: string): Subscription {
    return new Subscription({
      consent: true,
      dateOfBirth: new Date(),
      email: 'test@test.com',
      newsletterId: 'new',
      firstName: 'Cristo',
      gender: 'male',
      id,
    });
  }
  getAll(): Subscription[] {
    return [
      new Subscription({
        consent: true,
        dateOfBirth: new Date(),
        email: 'test@test.com',
        newsletterId: 'new',
        firstName: 'Cristo',
        gender: 'male',
        id: uuidv4(),
      }),
    ];
  }
}

describe('PublicServiceController', () => {
  let publicServiceController: PublicServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PublicServiceController],
      providers: [
        PublicServiceService,
        {
          provide: SubscriptionRepositorySymbol,
          useClass: SubscriptionRepositryMock,
        },
      ],
    }).compile();

    publicServiceController = app.get<PublicServiceController>(
      PublicServiceController,
    );
  });

  describe('public-service', () => {
    it('should return new user identifier', async () => {
      expect(
        await publicServiceController.subscription({
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
        await publicServiceController.subscription({
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
  });
});
