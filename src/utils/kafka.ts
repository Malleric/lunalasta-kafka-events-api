import { Kafka } from 'kafkajs';
import { CreateKafkaClientOptions } from '../type/kafka.type';

export function createKafkaClient(options?: CreateKafkaClientOptions): Kafka {
  const brokers =
    options?.brokers ||
    (process.env.KAFKA_BROKER
      ? process.env.KAFKA_BROKER.split(',')
      : ['kafka:9092']);

  const clientId =
    options?.clientId ||
    process.env.KAFKA_CLIENT_ID ||
    'app-producer';

  console.log('[Kafka] brokers:', brokers);
  console.log('[Kafka] clientId:', clientId);

  return new Kafka({
    clientId,
    brokers,
  });
}
