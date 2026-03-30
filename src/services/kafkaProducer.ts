import { Producer } from 'kafkajs';
import { createKafkaClient } from '../utils/kafka';
import { AppEvent } from '../type/event.type';

let producer: Producer | null = null;

// Singleton producer
async function getProducer(): Promise<Producer> {
  if (!producer) {
    const kafka = createKafkaClient({
      clientId: process.env.KAFKA_CLIENT_ID || 'kafka-events-api',
    });

    producer = kafka.producer();
    await producer.connect();

    console.log('[Kafka] Producer connecté');
  }

  return producer;
}

// Création d’un event standard
export function createEvent<T>(
  type: string,
  payload: T
): AppEvent<T> {
  return {
    type,
    payload,
    createdAt: new Date().toISOString(),
  };
}

// Envoi générique
export async function sendEvent<T>(
  topic: string,
  event: AppEvent<T>
): Promise<void> {
  const producer = await getProducer();

  await producer.send({
    topic,
    messages: [
      {
        value: JSON.stringify(event),
      },
    ],
  });
}
