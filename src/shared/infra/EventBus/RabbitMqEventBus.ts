import amqp from "amqplib";
import { EventBus } from "../../domain/EventBus";
export class RabbitMqEventBus implements EventBus {
  ch: any;
  constructor() {
    try {
      const connection = amqp.connect("amqp://" + process.env.RABBITMQ_URI);
      connection.then(async (conn) => {
        this.ch = await conn.createChannel();
        //await channel.assertExchange(EXCHANGE_NAME, EXCHANGE_TYPE);
        await this.ch.assertQueue(process.env.RABBITMQ_DEFAULT_QUEUE);
        //channel.bindQueue(process.env.RABBITMQ_DEFAULT_QUEUE, EXCHANGE_NAME, KEY);
      });
    } catch (e) {
      console.log(e);
    }
  }
  async publish(data: any) {
    this.ch.sendToQueue(process.env.RABBITMQ_DEFAULT_QUEUE, Buffer.from(data), {
      persistent: true,
    });
  }
}
