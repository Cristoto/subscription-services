import { Injectable } from '@nestjs/common';
import { EventRepository } from 'src/domain/event.repository';
import { Subscription } from 'src/domain/subscription';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Injectable()
export class KafkaEventRepository implements EventRepository {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: process.env.KAFKA_CLIENTID,
        brokers: [`${process.env.KAFKA_URL}:${process.env.KAFKA_PORT}`],
      },
      consumer: {
        groupId: process.env.KAFKA_GROUPID,
      },
    },
  })
  private client: ClientKafka;

  publish(subscription: Subscription): void {
    this.client.send('send.email', subscription);
  }
}
