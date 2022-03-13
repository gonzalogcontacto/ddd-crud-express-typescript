import amqp from "amqplib/callback_api";
export class RabbitMqEventBus {
  CONN_URL = "amqp://" + process.env.RABBITMQ_URI;
  connect: void;
  ch: any;
  constructor() {
    this.connect = amqp.connect(this.CONN_URL, (err, conn) => {
      conn.createChannel((err, channel) => {
        this.ch = channel;
      });
    });
  }
  async publish(data: any) {
    this.ch.sendToQueue(process.env.RABBITMQ_DEFAULT_QUEUE, Buffer.from(data), {
      persistent: true,
    });
  }
}
